"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "../ui/Button";
const SignInForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "http://localhost:3000/admin" });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

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
