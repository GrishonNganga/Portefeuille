'use client'
import { X } from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DM_Mono, Silkscreen } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import useElementDimensions from "@/lib/hooks/dimensions";
import TopNav from "../landing/top-nav";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})

export function PageLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="h-dvh w-full md:p-8">
            <div className="w-full h-full flex flex-col overflow-scroll md:rounded-lg relative bg-green-50 shadow-md shadow-green-50 scrollbar-hide">
                <div>
                    <TopNav />
                </div>
                <div className="container mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}