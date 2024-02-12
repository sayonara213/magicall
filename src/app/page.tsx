import { ThemeSwitch } from "@/components/global/theme-switch";
import React from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white rounded-sm flex items-center justify-center">
        Lol
      </div>
      <ThemeSwitch />
    </main>
  );
};

export default Home;
