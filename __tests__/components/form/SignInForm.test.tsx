import { render, screen, waitFor } from "@testing-library/react";
import SignInForm from "@/components/form/SignInForm";
import { AppRouterContextProviderMock } from "@/util/app-router-context-provider-mock";
jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual("next-auth/react");
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { name: "admin" },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: "authenticated" };
    }),
  };
});

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe("SignInForm", () => {
  it('should have "Sign in with Google" text', async () => {
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <SignInForm />
      </AppRouterContextProviderMock>
    ); //ARRANGE
    const myElem = screen.getByText(/Sign in/i); //ACT
    expect(myElem).toBeInTheDocument(); //ASSERT

    const myElem1 = screen.getByTestId("SignInGoogleButton"); //ACT
    expect(myElem1).toBeInTheDocument(); //ASSERT
  });
});
