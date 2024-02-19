import React from "react";

import { Logo } from "@/components/ui/logo";
import { AuthAdditionalForm } from "./auth-additional-form";

export const AuthAdditional = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
      <Logo width={200} />
      <div className="flex flex-col gap-4 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
        <h1>One more step</h1>
        <AuthAdditionalForm />
      </div>
    </div>
  );
};
