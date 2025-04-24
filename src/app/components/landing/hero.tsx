"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import CardComponent from "@/app/components/landing/card";
import { Card } from "@/lib/types";
import Intro from "./intro";
import TopNav from "./top-nav";
import useElementDimensions from "@/lib/hooks/dimensions";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const pageCards: Card[] = [
    {
      src: "/grish-outsidework.webp",
      gradients: ["bg-gradient-to-b from-[#807569] to-[#998E83] opacity-80"],
      title: "Outside Work",
      url: "/outside-work",
      id: 1,
    },
    {
      src: "/grish-battlestation.webp",
      gradients: ["bg-gradient-to-b from-[#3B3038] to-[#8d6683] opacity-80"],
      title: "Battle Station",
      url: "/battle-station",
      id: 2,
    },
    {
      src: "/grish-blog.jpeg",
      gradients: ["bg-gradient-to-b from-[#A25D76] to-[#B57D92] opacity-80"],
      title: "Blog",
      url: "/blog",
      id: 3,
    },
    {
      src: "/grish-hallofame.jpeg",
      gradients: ["bg-gradient-to-b from-[#697480] to-[#838E99] opacity-80"],
      title: "Wall of Fame",
      url: "/wall-of-fame",
      id: 4,
    },
    {
      src: "/grish-professional.webp",
      gradients: ["bg-gradient-to-b from-[#748069] to-[#8E9983] opacity-80"],
      title: "Professional",
      url: "/professional",
      id: 5,
    },
  ];
  const { width, height } = useElementDimensions(ref);
  const [cards, setCards] = useState<Card[]>(pageCards);
  const [movingCardId, setMovingCardId] = useState<number | null>(null);

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
      zIndex: cards.length - i,
    }),
    hidden: {
      // transition: { duration: 0.2 },
      // opacity: 0,
      // y: '100vh',
      // x: 0
    },
    swiped: ({ i, id }: { i: number, id: number }) => {
      if (id === movingCardId) {
        return {
          y: [
            null, 
            // First move up and out of the deck
            -Math.cos(angle(i)) + height * (1 - Math.cos(angle(i))) - height * 0.2,
            // Then move to final position (bottom of deck)
            -Math.cos(angle(cards.length - 1)) + height * (1 - Math.cos(angle(cards.length - 1)))
          ],
          x: [
            null,
            // Add a slight horizontal offset during the up movement
            Math.sin(angle(i)) + width * Math.sin(angle(i)) + width * 0.1,
            // Then move to final position
            Math.sin(angle(cards.length - 1)) + width * Math.sin(angle(cards.length - 1))
          ],
          rotate: [
            null,
            // Rotate slightly more during up movement
            `${angle(i) * 1.5}rad`,
            // Return to standard rotation for bottom card
            `${angle(cards.length - 1)}rad`
          ],
          scale: [null, 1.05, 1],
          zIndex: 0,
          transition: {
            duration: 0.8,
            times: [0, 0.6, 1],
            type: "tween",
            ease: [0.2, 0.65, 0.3, 1]
          }
        };
      } else {
        // Other cards just adjust to their new positions
        return {
          y: -Math.cos(angle(i)) + height * (1 - Math.cos(angle(i))),
          x: Math.sin(angle(i)) + width * Math.sin(angle(i)),
          rotate: `${angle(i)}rad`,
          zIndex: cards.length - i,
          transition: {
            duration: 0.3,
            delay: 0.5,
          }
        };
      }
    },
  };

  const handleCardSwipe = (cardId: number) => {
    if (movingCardId !== null) return;
    
    setMovingCardId(cardId);
    
    // Get the card and move it to the bottom of the deck
    const cardIndex = cards.findIndex(card => card.id === cardId);
    if (cardIndex === -1) return;
    
    setTimeout(() => {
      const newCards = [...cards];
      const [movedCard] = newCards.splice(cardIndex, 1);
      newCards.push(movedCard);
      
      setCards(newCards);
      
      // Reset after animation completes
      setTimeout(() => {
        setMovingCardId(null);
      }, 300);
    }, 500);
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
          <AnimatePresence>
            {cards.map((card, i) => (
              <motion.div
                custom={{ i, id: card.id }}
                initial={false}
                animate={movingCardId !== null ? "swiped" : "show"}
                variants={variants}
                className="absolute"
                key={`${card.title}-${card.id}`}
                style={{
                  transformOrigin: "center bottom",
                  height: `${
                    height / (width < 1500 ? 3 : width < 1920 ? 2.5 : 2)
                  }px`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, info) => {
                  if (Math.abs(info.offset.x) > 100) {
                    handleCardSwipe(card.id!);
                  }
                }}
                whileTap={{ scale: 1.03 }}
                whileHover={{ scale: 1.01, cursor: "grab" }}
              >
                <CardComponent
                  card={card}
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
