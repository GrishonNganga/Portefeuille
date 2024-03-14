'use client'
import { X } from "lucide-react"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DM_Mono, Silkscreen } from "next/font/google";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})

export default function Layout({ image, title, description, gradient, children }: { image: string, title: string, description: string, children: React.ReactNode, gradient: string }) {
    return (
        <div className="w-full h-dvh flex flex-col">
            <motion.div
                className="w-full h-1/3 relative shrink-0">
                <motion.div
                    className={`absolute top-0 w-full ${gradient}`}
                    initial={{ height: 0 }}
                    animate={{ height: '100%', transition: { type: 'easeInOut' } }}
                >

                </motion.div>
                <div className="absolute right-0 p-5 lg:p-10">
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
                    <div className="relative w-64 shrink-0">
                        <Image src={image}
                            width={1000} height={1000}
                            className="aspect-square object-cover rounded-xl" alt="Professional Grishon" />
                        <div
                            className={`absolute top-0 w-full h-full ${gradient} rounded-xl opacity-80`}>
                        </div>
                    </div>
                    <div>
                        <div className={`text-5xl text-[#F9FFF2] ${silk.className}`}>
                            {title}
                        </div>
                        <div className={`mt-10 font-dmono font-semibold w-3/4 tracking-wider text-[#F9FFF2] ${dmono.className}`}>
                            {description}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: .5 } }}
                    className="absolute flex lg:hidden items-center gap-x-5 z-100 top-10 2xl:top-1/3 flex container">
                    <div>
                        <div className={`text-3xl text-[#F9FFF2] ${silk.className}`}>
                            {title}
                        </div>
                        <div className={`mt-5 font-dmono font-semibold tracking-wider text-sm text-[#F9FFF2] ${dmono.className}`}>
                            {description}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <div className="w-full h-full overflow-scroll pt-20 container">
                {children}
            </div>
        </div>
    )
}