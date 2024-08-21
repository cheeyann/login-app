"use client";
import React from "react";
import Button from "./ui/Button";
import { signOut } from "next-auth/react";

const UserAccountNav = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      className="button button-sign-out"
      label="Sign Out"
    />
  );
};

export default UserAccountNav;
