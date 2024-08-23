import { render, screen, waitFor } from "@testing-library/react";
import UserListForm from "@/components/form/UserListForm";
import { act } from "react";

const data = {
  page: 1,
  per_page: 6,
  total: 6,
  total_pages: 1,
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

describe("UserListForm", () => {
  it("should have User List Table text", () => {
    render(<UserListForm />);
    const myElem = screen.getByText("User List Table"); //ACT
    expect(myElem).toBeInTheDocument(); //ASSERT
  });
  it('should contain "Avatar" text', () => {
    render(<UserListForm />);
    const myElem = screen.getByText(/Avatar/i);
    expect(myElem).toBeInTheDocument();
  });
  it("should have call API and display correct content", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    ) as jest.Mock;
    await act(async () => {
      render(<UserListForm />);
    });
    const firstNamedisplay = screen.getByText("George");
    const LastNamedisplay = screen.getByText("Bluth");
    expect(firstNamedisplay).toBeInTheDocument();
    expect(LastNamedisplay).toBeInTheDocument();
  });
  it("should have call API and display content with masked email", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    ) as jest.Mock;
    await act(async () => {
      render(<UserListForm />);
    });
    const emailButton = screen.getByTestId("showEmailButton_0");
    expect(emailButton).toHaveTextContent("Show Email");
    const email_display = screen.getByText("e*******g@reqres.in");
    expect(email_display).toBeInTheDocument();
  });
  it("should have call API and show email", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    ) as jest.Mock;
    await act(async () => {
      render(<UserListForm />);
    });
    const emailButton = screen.getByTestId("showEmailButton_0");
    expect(emailButton).toHaveTextContent("Show Email");
    await act(async () => {
      emailButton.click();
    });
    const emailDisplay = screen.getByText("george.bluth@reqres.in");
    expect(emailButton).toHaveTextContent("Hide Email");
    expect(emailDisplay).toBeInTheDocument();
  });
});
