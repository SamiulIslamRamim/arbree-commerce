import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl font-black text-shop-dark-green tracking-wider uppercase hover:text-shop-light-green hoverEffect group font-sans",
          className
        )}
      >
        ARBREE
        <span className="text-shop-light-green group-hover:text-shop-dark-green hoverEffect">MART</span>
      </h2>
    </Link>
  ); 
};

export default Logo;
