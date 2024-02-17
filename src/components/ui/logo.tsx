import { IMAGES } from "@/constants/images";
import Image from "next/image";
import React from "react";

interface ILogoProps {
  width?: number;
  type?: "default" | "compact";
  className?: string;
}

export const Logo: React.FC<ILogoProps> = ({ width, type, className }) => {
  return (
    <>
      <Image
        src={
          type === "compact" ? IMAGES.logoCompactWhite : IMAGES.logoFullWhite
        }
        unoptimized
        width={width}
        alt="Logo"
        className="hidden dark:block"
      />
      <Image
        src={type === "compact" ? IMAGES.logoCompact : IMAGES.logoFull}
        unoptimized
        width={width}
        alt="Logo"
        className="block dark:hidden"
      />
    </>
  );
};
