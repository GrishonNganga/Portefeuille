'use client'
import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";

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

                </motion.div>
            </Layout>
        </div>
    )
}
