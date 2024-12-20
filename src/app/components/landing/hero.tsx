"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import CardComponent from "@/app/components/landing/card";
import { Card } from "@/lib/types";
import Intro from "./intro";
import TopNav from "./top-nav";
import { Dices } from "lucide-react";
import useElementDimensions from "@/lib/hooks/dimensions";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const pageCards: Card[] = [
    {
      src: "/grish-outsidework.webp",
      gradients: ["bg-gradient-to-b from-[#807569] to-[#998E83] opacity-80"],
      title: "Outside Work",
      url: "/outside-work",
    },
    {
      src: "/grish-battlestation.webp",
      gradients: ["bg-gradient-to-b from-[#3B3038] to-[#8d6683] opacity-80"],
      title: "Battle Station",
      url: "/battle-station",
    },
    {
      src: "/grish-blog.jpeg",
      gradients: ["bg-gradient-to-b from-[#A25D76] to-[#B57D92] opacity-80"],
      title: "Blog",
      url: "/blog",
    },
    {
      src: "/grish-hallofame.jpeg",
      gradients: ["bg-gradient-to-b from-[#697480] to-[#838E99] opacity-80"],
      title: "Wall of Fame",
      url: "/wall-of-fame",
    },
    {
      src: "/grish-professional.webp",
      gradients: ["bg-gradient-to-b from-[#748069] to-[#8E9983] opacity-80"],
      title: "Professional",
      url: "/professional",
    },
  ];
  const { width, height } = useElementDimensions(ref);
  const [cards, setCards] = useState<Card[]>(pageCards);

  function angle(i: number) {
    const factor = cards.length / (width < 768 ? 1 : height < 1500 ? 3 : 4);
    let x = offsetFromCenter(cards, i) * 0.05;
    if (cards.length % 2 === 0) x += 0.025;
    return x * (Math.PI / factor);
  }

  const variants: Variants = {
    show: ({ i }: { i: number }) => ({
      opacity: 1,
      y: -Math.cos(angle(i)) + height * (1 - Math.cos(angle(i))),
      x: Math.sin(angle(i)) + width * Math.sin(angle(i)),
      rotate: `${angle(i)}rad`,
      transition: {
        duration: 0.2,
      },
    }),
    hidden: {
      // transition: { duration: 0.2 },
      // opacity: 0,
      // y: '100vh',
      // x: 0
    },
  };

  const randomlyRearrangeCards = () => {
    const shuffled = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCards(shuffled);
  };
  return (
    <div ref={ref} className="h-dvh w-full md:p-8">
      <div className="w-full h-full flex flex-col justify-between overflow-hidden md:rounded-lg relative bg-green-50 shadow-md shadow-green-50">
        <Intro />
        <div className="fixed">
          <TopNav />
        </div>
        <motion.div
          layoutId={Math.random().toString()}
          className="relative lg:h-1/2 h-full flex items-end justify-center"
        >
          <div className="lg:hidden absolute h-full">
            <div className="w-full h-1/4 flex items-end ">
              <motion.div
                className="p-2 bg-gray-100 rounded-full shadow-md"
                onClick={randomlyRearrangeCards}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                whileTap={{
                  scale: 1.1,
                }}
              >
                <Dices size={40} className="" />
              </motion.div>
            </div>
          </div>
          <AnimatePresence>
            {cards.map((card, i) => (
              <motion.div
                custom={{ i }}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants}
                className="absolute"
                key={i}
                transition={{ type: "tween" }}
                style={{
                  transformOrigin: "center bottom",
                  height: `${
                    height / (width < 1500 ? 3 : width < 1920 ? 2.5 : 2)
                  }px`,
                }}
              >
                <CardComponent
                  card={card}
                  // width={(handWidth / (cards.length))}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function offsetFromCenter<T>(array: T[], index: number): number {
  return index - Math.floor(array.length / 2);
}
