'use client'
import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";

export default function Page() {
    return (
        <div className="">
            <Layout
                title="Battle Station"
                description="My current work setup"
                image="/grish-battlestation.jpeg"
                gradient="bg-gradient-to-b from-[#3B3038] to-[#8d6683] opacity-80"

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
