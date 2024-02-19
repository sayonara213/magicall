"use client";

import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/schema";

export const LogoutButton = () => {
  const supabase = createClientComponentClient<Database>();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Button variant="outline" size="icon" onClick={handleLogout}>
      <LogOut />
      <span className="sr-only">Logout</span>
    </Button>
  );
};
