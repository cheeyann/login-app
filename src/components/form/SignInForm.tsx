"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "../ui/Button";
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
const SignInForm = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {}
  };

  useEffect(() => {
    if (session) {
      dispatch(logIn(session.user?.name));
      setIsLoading(false);
      router.push("/admin");
    }
  }, [session]);
  return (
    <div>
      <Button
        disabled={isLoading}
        onClick={loginWithGoogle}
        className="button button-normal w-full"
        isLoading={isLoading}
        label="Sign in with Google"
      />
    </div>
  );
};

export default SignInForm;
