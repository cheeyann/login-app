import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
type Props = {
  children?: React.ReactNode;
};
const withAuth = (WrappedComponent: any) => {
  return (props: Props) => {
    const isSignedIn = useAppSelector(
      (state) => state.authReducer.value.isAuth
    );
    const router = useRouter();

    useEffect(() => {
      if (!isSignedIn) {
        router.push("/sign-in");
      }
    }, [isSignedIn, router]);

    if (!isSignedIn) {
      return <p>Redirecting...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
