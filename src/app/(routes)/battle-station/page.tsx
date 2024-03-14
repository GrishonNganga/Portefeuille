'use client'
import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const images = ["/grish-battlestation.jpeg", "/station-one.jpg", "/station-two.jpg"]
export default function Page() {
    return (
        <div className="">
            <Layout
                title="Battle Station"
                description="My current work setup"
                image="/grish-battlestation.jpeg"
                gradient="bg-gradient-to-b from-[#3B3038] to-[#8d6683] opacity-80"

            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 1
                        }
                    }}
                >
                    <div className="container lg:mt-0 mb-20 flex flex-col items-center">
                        <div className="text-2xl font-bold tracking-wider">
                            My current work setup
                        </div>
                        <div className="flex flex-col text-lg mt-3 text-sm">
                            <div className="flex gap-x-2 border-t border-gray-100 py-3 ">
                                <div className="">
                                    1.
                                </div>
                                2021 14&quot; Macbook M1 Pro
                            </div>
                            <div className="flex gap-x-2 border-t border-gray-100 py-3">
                                <div className="">
                                    2.
                                </div>
                                27&quot; HP M27f Display
                            </div>
                            <div className="flex gap-x-2 border-t border-gray-100 py-3">
                                <div className="">
                                    3.
                                </div>
                                1st Gen Airpods Pro
                            </div>
                            <div className="flex gap-x-2 border-t border-gray-100 py-3">
                                <div className="">
                                    4.
                                </div>
                                Noise Cancelling Earbuds
                            </div>
                            <div className="flex gap-x-2 border-t border-gray-100 py-3">
                                <div className="">
                                    5.
                                </div>
                                Notebook
                            </div>
                            <div className="flex gap-x-2 border-t border-gray-100 py-3">
                            <div className="">
                                    6.
                                </div>
                                Pen
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <Carousel className="w-full">
                                <CarouselContent className="w-full h-full">
                                    {
                                        images.map((image, idx) => {
                                            return (
                                                <CarouselItem key={idx} className="w-full h-full max-h-max aspect-16/9">
                                                    <Image src={image} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover" />
                                                </CarouselItem>
                                            )
                                        })
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>

                        </div>
                    </div>
                </motion.div>
            </Layout>
        </div>
    )
}
