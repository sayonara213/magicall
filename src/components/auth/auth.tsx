import React from "react";

import Link from "next/link";
import { AuthForm } from "./auth-form";
import { Logo } from "@/components/ui/logo";

interface IAuthProps {
  isSignIn?: boolean;
}

const Auth: React.FC<IAuthProps> = ({ isSignIn }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
      <Logo width={200} />
      <div className="flex flex-col gap-4 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <AuthForm isSignIn={isSignIn} />
        <Link
          className="text-sm text-right hover:underline cursor-pointer"
          href={isSignIn ? "/auth/sign-up" : "/auth/sign-in"}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
