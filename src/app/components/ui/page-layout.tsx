"use client";

import { DM_Mono, Silkscreen } from "next/font/google";
import TopNav from "../landing/top-nav";
import { cloneElement, useRef } from "react";
import React from "react";

const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const dmono = DM_Mono({
  subsets: ["latin"],
  weight: "300",
});

export function PageLayout({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) {

  return (
    <div className="w-full h-dvh md:p-8">
      <div className={`${backgroundColor} h-full rounded-md shadow-md overflow-hidden`}> 
        <TopNav />
        <div className="relative w-full h-full overflow-y-auto">
          <div className=" absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full container">
            {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
