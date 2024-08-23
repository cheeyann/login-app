import React from "react";

const LoginFooter = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 bottom-0">
      <div className="container flex items-center justify-between">
        <h2>{year}</h2>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default LoginFooter;
