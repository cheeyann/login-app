"use client";
import Link from "next/link";
import React from "react";
import UserAccountNav from "./UserAccountNav";
import { useAppSelector } from "@/redux/store";
const LoginHeader = () => {
  const isSignedIn = useAppSelector((state) => state.authReducer.value.isAuth);

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h2>Home</h2>
        </Link>
        {isSignedIn ? (
          <UserAccountNav />
        ) : (
          <Link className="button button-normal" href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
