"use client";
import { motion } from "framer-motion";
import { Silkscreen } from "next/font/google";

import React from "react";

const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

import { PageLayout } from "@/app/components/ui/page-layout";

import Image from "next/image";

const images = [
  "/grish-battlestation.webp",
  "/station-one.webp",
  "/station-two.jpg",
];
export default function Page() {
  return (
    <div className="">
      <PageLayout backgroundColor="bg-rose-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
            },
          }}
        >
          <div className="p-4 md:mt-20">
            <div
              className={`text-3xl lg:text-6xl text-[#748069] font-bold ${silk.className}`}
            >
              Battle station<span className="text-[#4c5544]">.</span>
            </div>
            {/* <JobsSectionLinks /> */}
          </div>
          <div className="container lg:mt-0 mb-20 flex flex-col ">
            <div className="flex flex-col text-lg mt-3 text-sm">
              <div className="flex gap-x-2 border-t border-gray-100 py-3 ">
                <div className="">1.</div>
                2021 14&quot; Macbook M1 Pro
              </div>
              <div className="flex gap-x-2 border-t border-gray-100 py-3">
                <div className="">2.</div>
                27&quot; HP M27f Display
              </div>
              <div className="flex gap-x-2 border-t border-gray-100 py-3">
                <div className="">3.</div>
                1st Gen Airpods Pro
              </div>
              <div className="flex gap-x-2 border-t border-gray-100 py-3">
                <div className="">4.</div>
                Noise Cancelling Earbuds
              </div>
              <div className="flex gap-x-2 border-t border-gray-100 py-3">
                <div className="">5.</div>
                Notebook
              </div>
              <div className="flex gap-x-2 border-t border-gray-100 py-3">
                <div className="">6.</div>
                Pen
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-40">
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    width={400}
                    height={400}
                    className="h-full max-w-full rounded-lg"
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </PageLayout>
    </div>
  );
}
