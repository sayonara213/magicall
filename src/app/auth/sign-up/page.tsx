import Auth from "@/components/auth/auth";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/app");
  }

  return <Auth />;
};

export default SignUpPage;
