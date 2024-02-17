import React from "react";
import { ThemeSwitch } from "./theme-switch";
import { LogoutButton } from "./logout-button";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  return (
    <nav className="flex flex-col items-center gap-2 w-[72px] pt-2 border-r ">
      <Button variant={"outline"} size="icon">
        <Logo type="compact" width={24} />
      </Button>
      <Separator />
      <ThemeSwitch />
      <LogoutButton />
    </nav>
  );
};
