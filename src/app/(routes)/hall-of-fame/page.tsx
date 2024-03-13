import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";

export default function Page() {
    return (
        <div className="">
            <Layout
                title="Hall of Fame"
                description="Some of the publications and videos I have been featured in."
                image="/grish-hallofame.jpeg"
                gradient="bg-gradient-to-b from-[#697480] to-[#838E99] opacity-80"

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
