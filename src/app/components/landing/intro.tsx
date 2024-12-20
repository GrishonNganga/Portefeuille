import { motion } from "framer-motion"
import { DM_Mono, Silkscreen } from "next/font/google";
import Image from "next/image";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})
export default function Intro() {
    return (
        <motion.div
            className="w-full h-1/2 shrink-0 flex flex-col justify-end lg:justify-center"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
        >
            <div data-splitting className={`lg:text-4xl text-center text-xl md:text-5xl text-[#4c5544] font-extrabold tracking-wider ${silk.className}  z-[100]`}>
                Grishon Ng&apos;ang&apos;a
            </div>
            <div
                className={`flex flex-col mt-5 items-center text-[#4c5544] text-sm lg:text-lg tracking-wider font-dmono appearFromTop ${dmono.className} z-[100]`}>
                <div>
                    Full Stack Software Engineer
                </div>
                <div>
                    Gym Bro / Fitness Enthusiast
                </div>
                <div>
                    Meditation / Mindfullness Noob
                </div>
                <div>
                    Car Guy
                </div>
                <div>
                    Hitch-hiker
                </div>
            </div>
            <div className="flex justify-center gap-x-5 pt-5 items-center  z-[100]">
                <div className="w-10 h-10">
                    <a href="https://www.linkedin.com/in/grishon-ng-ang-a-8426b5149/" target="_blank">
                        <Image width={50} height={50} alt="Linked logo" src="/linkedin-logo.png" className="w-full h-full" />
                    </a>
                </div>
                <div className="w-10 h-10">
                    <a href="https://www.github.com/GrishonNganga" target="_blank">
                        <Image width={50} height={50} alt="Github logo" src="/github-logo.png" className="w-full h-full" />
                    </a>
                </div>
                <div className="w-10 h-10">
                    <a href="https://x.com/GrishonNganga" target="_blank">
                        <Image width={50} height={50} alt="X logo" src="/x.png" className="w-full h-full" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}