import React from "react";

import Auth from "@/components/auth/auth";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/app");
  }

  return <Auth isSignIn />;
};

export default SignInPage;
