import { motion } from "framer-motion"
import { DM_Mono, Silkscreen } from "next/font/google";

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
            className="w-full grow shrink-0 flex flex-col justify-end lg:justify-center"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
        >
            <div data-splitting className={`text-4xl text-center lg:text-5xl text-[#F9FFF2] font-extrabold tracking-wider ${silk.className}`}>
                Grishon Ng'ang'a
            </div>
            <div
                className={`flex flex-col mt-5 items-center text-[#F9FFF2] text-lg tracking-wider font-dmono appearFromTop ${dmono.className}`}>
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
            <div className="flex justify-center gap-x-5 pt-5 items-center">
                <div className="w-10 h-10">
                    <a href="https://www.linkedin.com/in/grishon-ng-ang-a-8426b5149/" target="_blank">
                        <img src="/linkedin-logo.png" className="w-full h-full" />
                    </a>
                </div>
                <div className="w-10 h-10">
                    <a href="https://www.github.com/GrishonNganga" target="_blank">
                        <img src="/github-logo.png" className="w-full h-full" />
                    </a>
                </div>
                <div className="w-10 h-10">
                    <a href="https://x.com/GrishonNganga" target="_blank">
                        <img src="/x.png" className="w-full h-full" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}