import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Home text", () => {
    render(<Home />); //ARRANGE
    const myElem = screen.getByText("Home"); //ACT
    expect(myElem).toBeInTheDocument(); //ASSERT
  });
  it('should contain "Open" text', () => {
    render(<Home />);
    const myElem = screen.getByText(/Open/i);
    expect(myElem).toBeInTheDocument();
  });
});
