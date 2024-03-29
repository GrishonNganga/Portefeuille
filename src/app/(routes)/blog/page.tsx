'use client'
import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";

export default function Page() {
    return (
        <div className="">
            <Layout
                title="Blog"
                description="Sometimes I write about whatever I'm into."
                image="/grish-battlestation.jpeg"
                gradient="bg-gradient-to-b from-[#A25D76] to-[#B57D92] opacity-80"

            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 1
                        }
                    }}
                >

                </motion.div>
            </Layout>
        </div>
    )
}
