'use client'
import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function Page() {
    return (
        <div className="">
            <Layout
                title="Outside Work"
                description="Some of the things I'm interested in outside work"
                image="/grish-outsidework.jpg"
                gradient="bg-gradient-to-b from-[#807569] to-[#998E83] opacity-80"

            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 1
                        }
                    }}
                >
                    <div className="lg:container lg:mt-0 mb-20 flex flex-col items-center gap-y-5">
                        <Card className="lg:w-3/4 flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-[#4c5544]">Health & Fitness</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-y-3">
                                <div>
                                    <div className="text-lg text-gray-500">
                                        Gym
                                    </div>
                                    <div>
                                        I am an avid gym bro. I go to the gym at least 3 - 5 days a week.
                                    </div>
                                </div>
                                <div>
                                    <div className="text-lg text-gray-500">
                                        Running
                                    </div>
                                    <div>
                                        I picked up running in 2023, I like the idea of not only growing strong, but also
                                        having physical agility and endurance.
                                    </div>
                                </div>
                                <div>
                                    <div className="text-lg text-gray-500">
                                        Meditation & Breathing Practices
                                    </div>
                                    <div>
                                        These very simple practices helped me be more present, slow down and reduce alot
                                        of anxiety that comes with life. I thoroughly recommend. (Esp Wim Hof Breathing
                                        exercises)
                                    </div>
                                </div>
                                <div>
                                    <div className="text-lg text-gray-500">
                                        IronMan 2025
                                    </div>
                                    <div>
                                        I am also preparing to compete in the Ironman Challenge held in <Link className="text-blue-500 hover:underline" href={"https://www.ironman.com/im703-rwanda"} target="_blank">Rwanda</Link> in 2025. Since Jan 2024, I have been training for the incredible feat.
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="lg:w-3/4 flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-[#4c5544]">Travel, Adventure & Hitchhiking</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-y-3">
                                <div>

                                    <div>
                                        I love to travel to new places. I love chasing sunsets. I love being out in the wild,
                                        experiencing new cultures. Generally, anything that get's me outdoors.
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        I've had a chance to travel extensively within my country Kenya as well as visit
                                        Tanzania, Uganda, Tunisia and T&#252;rkiye.
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        2024 I'm taking it further, with a goal to visit 5 countries, within Africa, Europe and
                                        North America.
                                    </div>
                                </div>
                                <div>
                                    <div className="text-lg text-gray-500">
                                        Hitchhiking
                                    </div>
                                    <div>
                                        <span className="italic">"​A person who travels by asking for free rides in other people's
                                            cars, by
                                            standing at
                                            the side of the road and trying to get passing cars to stop."</span>
                                        <br /><br />
                                        I've had the goal to go on a hitchhiking trip across Kenya, which I was fortunate to
                                        achieve between 1st Dec - 10th Dec 2023. Travelling across 7 counties and covering about
                                        700km.
                                    </div>
                                </div>
                                <div className="p-5">
                                    <Carousel className="w-full flex justify-center">
                                        <CarouselContent className="lg:w-1/3 h-full z-0 ">
                                            <CarouselItem className="w-full h-full max-h-max  z-0">
                                                <Image src={"/travel-one.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                            </CarouselItem>
                                            <CarouselItem className="w-full max-h-max aspect-16/9 z-0">
                                                <Image src={"/travel-two.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                            </CarouselItem>
                                            <CarouselItem className="w-full h-full max-h-max aspect-16/9 z-0">
                                                <Image src={"/travel-three.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                            </CarouselItem>
                                            <CarouselItem className="w-full h-full max-h-max aspect-16/9 z-0">
                                                <Image src={"/travel-four.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                            </CarouselItem>
                                            <CarouselItem className="w-full h-full max-h-max aspect-16/9 z-0">
                                                <Image src={"/travel-five.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                            </CarouselItem>
                                            <CarouselItem className="w-full h-full max-h-max aspect-16/9 z-0">
                                                <Image src={"/travel-six.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                            </CarouselItem>
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="lg:w-3/4 flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-[#4c5544]">Cars/Speed Enthusiast</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-y-3">
                                <div>
                                    <div>
                                        I love speed and adrenaline. I love cars. I love building them and spending time in the
                                        garage. I am
                                        currently building and transforming my 2010 Audi A5 into the most powerful ad beautiful
                                        Audi A5 in
                                        Africa. It's currently pushing around 350hp, on the road to 600hp. Take a look at the
                                        progress.
                                    </div>
                                </div>
                                <Carousel className="w-full flex justify-center z-0">
                                    <CarouselContent className="lg:w-1/2 h-full z-0">
                                        <CarouselItem className="w-full h-full max-h-max aspect-16/9 z-0">
                                            <Image src={"/greem-one.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                        </CarouselItem>
                                        <CarouselItem className="w-full h-full max-h-max aspect-16/9 z-0">
                                            <Image src={"/greem-two.jpg"} width={500} height={500} alt="My work setup 1" className="w-full h-full object-cover z-0" />
                                        </CarouselItem>
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </Layout>
        </div>
    )
}
