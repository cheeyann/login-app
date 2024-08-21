import UserListForm from "@/components/form/UserListForm";
import LoginFooter from "@/components/LoginFooter";
import LoginHeader from "@/components/LoginHeader";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  if (session?.user) {
    return (
      <>
        <LoginHeader />
        <div className="fixed py-6 top-10 left-10 pr-10">
          <h2>Admin Page - Welcome back {session?.user?.name}</h2>
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
