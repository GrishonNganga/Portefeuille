import { ICard } from "@/lib/types";
import clsx from "clsx";
import { Silkscreen } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

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
    console.log(props.width)
    const isFace = true
    return (
        <Link href={props.card!.url}>
            <motion.div
                className="relative bottom-0 aspect-square cursor-pointer"
                style={{ zIndex: props.z ?? "unset", width: props.width }}
                initial={{ y: 0 }}
                whileHover={{
                    y: [-50, 0],
                    transition: {
                        duration: .5,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }
                }}
            >
                <motion.img
                    layoutId={Math.random().toString()}
                    animate={{
                        filter: props.grayOut ? "contrast(0.55)" : "contrast(1)",
                        transition: {
                            duration: 1.5,
                        },
                    }}
                    className={clsx(
                        "select-none w-full h-full object-cover",
                        !props.noShadow && "shadow-lg shadow-zinc-500/40 drop-shadow-xl",
                        isFace && "rounded-lg border-white p-1",
                    )}
                    src={props.card?.src}
                />
                {
                    props.card?.gradients.map(gradient => {
                        return (
                            <div
                                className={`absolute top-0 w-full h-full bg-gradient-to-b ${gradient} rounded-xl z-20 opacity-80 flipCard-front`}>
                            </div>
                        )
                    })
                }
                <div
                    className="absolute top-0 w-full h-full flex justify-center z-30 text-[#F9FFF2] font-silk text-xl lg:text-3xl py-5 flipCard-front">
                    <div className={`${silk.className}`}>
                        {props.card?.title}
                    </div>
                </div>
            </motion.div>
        </Link >
    );
}
