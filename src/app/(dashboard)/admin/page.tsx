"use client";
import UserListForm from "@/components/form/UserListForm";
import LoginFooter from "@/components/LoginFooter";
import LoginHeader from "@/components/LoginHeader";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";

const page = () => {
  const isSignedIn = useAppSelector((state) => state.authReducer.value.isAuth);
  const userName = useAppSelector((state) => state.authReducer.value.userName);
  if (isSignedIn) {
    return (
      <>
        <LoginHeader />
        <div className="fixed py-6 top-10 left-10 pr-10">
          <h2>Admin Page - Welcome back {userName}</h2>
          <UserListForm />
        </div>
        <LoginFooter />
      </>
    );
  }
  return (
    <h2>
      Please{" "}
      <Link className="text-blue-500 hover:underline" href="sign-in">
        sign in
      </Link>{" "}
      to see this admin page
    </h2>
  );
};

export default page;
