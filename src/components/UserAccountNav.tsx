"use client";
import React from "react";
import Button from "./ui/Button";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logOut } from "@/redux/features/auth-slice";
const UserAccountNav = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      onClick={() => {
        dispatch(logOut());
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        });
      }}
      className="button button-sign-out"
      label="Sign Out"
    />
  );
};

export default UserAccountNav;
