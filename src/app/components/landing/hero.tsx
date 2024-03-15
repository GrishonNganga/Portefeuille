'use client'
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "@/app/components/landing/card";
import { ICard } from "@/lib/types";
import { DM_Mono, Silkscreen } from "next/font/google";
import Intro from "./intro";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})
export default function Hero() {
    const ref = useRef<HTMLDivElement | null>(null);
    const pageCards: ICard[] = [
        {
            src: "/grish-outsidework.jpg",
            gradients: ["bg-gradient-to-b from-[#807569] to-[#998E83] opacity-80"],
            title: "Outside Work",
            url: "/outside-work"
        },
        {
            src: "/grish-battlestation.jpeg",
            gradients: ["bg-gradient-to-b from-[#3B3038] to-[#8d6683] opacity-80"],
            title: "Battle Station",
            url: "/battle-station"
        },
        {
            src: "/grish-blog.jpeg",
            gradients: ["bg-gradient-to-b from-[#A25D76] to-[#B57D92] opacity-80"],
            title: "Blog",
            url: "/blog"
        },
        {
            src: "/grish-hallofame.jpeg",
            gradients: ["bg-gradient-to-b from-[#697480] to-[#838E99] opacity-80"],
            title: "Hall of Fame",
            url: "/hall-of-fame"
        },
        {
            src: "/grish-professional.jpg",
            gradients: ["bg-gradient-to-b from-[#748069] to-[#8E9983] opacity-80"],
            title: "Professional",
            url: "/professional"
        },
    ]
    const [handWidth, setHandWidth] = useState(0);
    const [handHeight, setHandHeight] = useState(0)
    const [cards, setCards] = useState<ICard[]>(pageCards)
    const hasRef = ref.current !== undefined;

    useEffect(() => {
        const onResize = () => {
            setHandWidth(ref.current!.clientWidth)
            setHandHeight(ref.current!.clientHeight)
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [hasRef]);

    const [selected, setSelected] = useState(null);

    function angle(i: number) {
        const factor = cards.length / 4;
        let x = offsetFromCenter(cards, i) * 0.05;
        if (cards.length % 2 === 0) x += 0.025;
        return x * (Math.PI / factor);
    }

    const variants: Variants = {
        show: ({ i, isSelected }: { i: number; isSelected: boolean }) => ({
            y:
                (isSelected ? -Math.cos(angle(i)) : 0) +
                handHeight * (1 - Math.cos(angle(i))),
            x:
                (isSelected ? Math.sin(angle(i)) : 0) +
                handWidth * Math.sin(angle(i)),
            rotate: `${angle(i)}rad`,
            transition: {
                duration: .2
            }
        }),
        hidden: {
            transition: { duration: 0.2 },
            y: '100vh',
            x: 0
        },
    };

    return (
        <div ref={ref} className="h-dvh w-full md:p-8">
            <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-gradient-to-b md:bg-gradient-to-r from-[#4c5544] to-[#748069] md:rounded-md">
                <Intro />
                <div className="relative lg:h-1/2 flex items-end justify-center">
                    {cards.map((card, i) => (
                        <motion.div
                            custom={{ i, isSelected: selected == card }}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={variants}
                            className="absolute"
                            key={i}
                            transition={{ type: "tween" }}
                            style={{
                                transformOrigin: "center bottom",
                                height: `${handHeight / (handWidth < 1000 ? 3 : (handWidth < 1200 ? 2.5 : 2))}px`
                            }}
                        >
                            <Card
                                card={card}
                                width={(handWidth / (cards.length * (handWidth / cards.length < 300 ? 0.4 : (handWidth / cards.length < 500 ? 0.75 : 1))))}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function offsetFromCenter<T>(array: T[], index: number): number {
    return index - Math.floor(array.length / 2);
}