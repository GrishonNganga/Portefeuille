'use client'
import { X } from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DM_Mono, Silkscreen } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import useElementDimensions from "@/lib/hooks/dimensions";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})

export default function Layout({ image, title, description, gradient, children }: { image: string, title: string, description: string, children: React.ReactNode, gradient: string }) {
    const divRef = useRef(null)
    const [shrinked, setShrinked] = useState(false)
    const { scrollYProgress } = useScroll({
        container: divRef
    });
    const { width, height } = useElementDimensions(divRef)
    const [imageWidth, setImageWidth] = useState("10rem")
    const imageVariant = {
        initial: {
            width: imageWidth
        },
        animate: {
            width: imageWidth
        },
        shrinked: {
            width: '4rem'
        }
    }
    const headerVariant = {
        initial: {
            height: '33%'
        },
        shrinked: {
            height: '100px'
        }
    }
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.1) {
            setShrinked(true)
        } else {
            setShrinked(false)
        }
    })

    useEffect(() => {
        const fullWidth = width
        const w = fullWidth < 1000 ? '10rem' :
            fullWidth < 1500 ? '12rem' :
                fullWidth < 1900 ? '14rem' : '16rem'
        setImageWidth(w)
    }, [width])
    return (
        <div className="w-full h-dvh flex flex-col">
            <motion.div
                variants={headerVariant}
                initial="initial"
                animate={shrinked ? "shrinked" : "initial"}
                className={`w-full relative shrink-0`}
            >
                <motion.div
                    className={`absolute top-0 w-full ${gradient}`}
                    initial={{ height: 0 }}
                    animate={{ height: '100%', transition: { type: 'easeInOut' } }}
                >

                </motion.div>
                <div className="absolute right-0 p-5 lg:p-8">
                    <Link href={"/"}>
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.5, transition: { duration: .5 } }}
                            className="bg-gray-200 p-3 rounded-full cursor-pointer">
                            <X />
                        </motion.div>
                    </Link>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: .5 } }}
                    className="absolute hidden lg:flex gap-x-5 z-[100] top-1/4 2xl:top-1/3 left-20 flex">
                    <motion.div className="relative shrink-0"
                        variants={imageVariant}
                        animate={shrinked ? "shrinked" : "animate"}
                        style={{ transformOrigin: "center" }}
                    >
                        <Image src={image}
                            width={1000} height={1000}
                            className="aspect-square object-cover rounded-xl" alt="Professional Grishon" />
                        <div
                            className={`absolute top-0 w-full h-full ${gradient} rounded-xl opacity-80`}>
                        </div>
                    </motion.div>
                    <div>
                        <div className={`text-3xl 3xl:text-5xl text-[#F9FFF2] ${silk.className}`}>
                            {title}
                        </div>
                        {
                            !shrinked &&
                            <div className={`mt-5 3xl:mt-10 font-dmono font-semibold 2xl:w-3/4 tracking-wider text-[#F9FFF2] ${dmono.className}`}>
                                {description}
                            </div>
                        }
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: .5 } }}
                    className="absolute flex lg:hidden items-center gap-x-5 z-100 top-10 2xl:top-1/3 flex container">
                    <div>
                        <div className={`text-xl text-[#F9FFF2] ${silk.className}`}>
                            {title}
                        </div>
                        {
                            !shrinked &&
                            <div className={`xl:mt-5 font-dmono font-semibold tracking-wider text-sm text-[#F9FFF2] ${dmono.className}`}>
                                {description}
                            </div>
                        }
                    </div>
                </motion.div>
            </motion.div>
            <div className="w-full h-full overflow-scroll pt-20 container" ref={divRef}>
                {children}
            </div>
        </div>
    )
}