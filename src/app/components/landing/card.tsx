import { ICard } from "@/lib/types";
import clsx from "clsx";
import { Silkscreen } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: '400',
})

export interface CardProps {
    card?: ICard;
    z?: number;
    grayOut?: boolean;
    selectorMax?: number;
    noShadow?: boolean;
    width?: number
}

export default function Card(props: CardProps) {
    const isFace = true
    return (
        <Link href={props.card!.url}>
            <motion.div
                layoutId={Math.random().toString()}
                className="relative bottom-0 h-full aspect-square cursor-pointer"
                style={{ zIndex: props.z ?? "unset", width: props.width }}
                initial={{ y: 0 }}
                whileHover={{
                    y: -50,
                }}
            >
                <motion.div
                    animate={{
                        filter: props.grayOut ? "contrast(0.55)" : "contrast(1)",
                        transition: {
                            duration: 1.5,
                        },
                    }}
                    className="w-full h-full"

                >
                    <Image width={300} height={300} src={props.card?.src as string} alt={` ${props.card?.title} Card`}
                        className={clsx(
                            "select-none w-full h-full object-cover",
                            !props.noShadow && "shadow-lg shadow-zinc-500/40 drop-shadow-xl",
                            isFace && "rounded-lg border-white p-1",
                        )} />
                </motion.div>
                {
                    props.card?.gradients.map((gradient, idx) => {
                        return (
                            <div key={idx}
                                className={`absolute top-0 w-full h-full bg-gradient-to-b ${gradient} rounded-xl z-20 opacity-80 flipCard-front`}>
                            </div>
                        )
                    })
                }
                <div
                    className="absolute top-0 w-full h-full flex justify-center z-30 text-[#F9FFF2] font-silk text-xl xl:text-3xl py-5 flipCard-front">
                    <div className={`${silk.className}`}>
                        {props.card?.title}
                    </div>
                </div>
            </motion.div>
        </Link >
    );
}
