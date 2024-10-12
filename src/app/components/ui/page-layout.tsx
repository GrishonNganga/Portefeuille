'use client'
import { useScroll, motion } from "framer-motion"
import { useRef, useEffect } from "react"

import { DM_Mono, Silkscreen } from "next/font/google";
import TopNav from "../landing/top-nav";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})

export function PageLayout({ children, backgroundColor }: { children: React.ReactNode, backgroundColor: string }) {
    const layoutRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: layoutRef
    })

   useEffect(() => {
        scrollYProgress.on("change", e => console.log("Scroll Y", scrollYProgress))
    }, [])

    return (
        <motion.div className="h-dvh w-full md:p-8">
            <div className={`w-full h-full flex flex-col overflow-hidden md:rounded-lg relative ${backgroundColor} shadow-md`}>
                <div>
                    <TopNav />
                </div>
                <motion.div ref={layoutRef} className="container mx-auto overflow-scroll">
                    {children}
                </motion.div>
            </div>
        </motion.div>
    )
}