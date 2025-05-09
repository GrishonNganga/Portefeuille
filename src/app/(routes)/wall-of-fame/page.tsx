"use client";
import { motion } from "framer-motion";
import { Silkscreen } from "next/font/google";

import React from "react";

const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});
import { PageLayout } from "@/app/components/ui/page-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    image: "/grish-rendercon.jpg",
    title: "Garra be specific - A guide to CSS Specificity",
    description:
      "Based on the talk I gave on CSS Specificity at Rendercon Kenya 2024 at CUEA University.",
    link: "/blog/garra-be-specific-css-specificity-guide",
  },
  {
    image: "/grish-youngtechiez.webp",
    title: "Young Techies Podcast Interview",
    description:
      "In the series 'Behind the curtains', I shared a bit about my journey in Tech with Phyian Karinge.",
    link: "https://youtu.be/YlW_vlCS6Ow?si=wJIu5iq4gXgZ_ipT",
  },
  {
    image: "/geeks.jpeg",
    title: "The ‘geeks’ behind blockchain solution to electoral fraud",
    description: `
        Leading news publication wrote an article on our Deep Learning Indaba X Lawyer's hub hackathon win.
        `,
    link: "https://nation.africa/kenya/life-and-style/mynetwork/the-geeks-behind-blockchain-solution-to-electoral-fraud-3865136",
  },
  {
    image: "/peopledaily.webp",
    title: "Streamlining elections with AI, blockchain tech",
    description:
      "Leading news publication wrote an article on our Deep Learning Indaba X Lawyer's hub hackathon win.",
    link: "https://www.pd.co.ke/news/streamlining-elections-with-ai-blockchain-tech-135145",
  },
  {
    image: "/grish-hallofame.jpeg",
    title: "PyconKE Talk",
    description: `During the 2 day Pycon event, Kenya edition, I gave a talk dubbed "Intro to Web3 development".`,
    link: "https://www.pyconke.org/speakers/Grishon-Nganga",
  },
  {
    image: "/minimalist-flask.webp",
    title: "Google Developer Student Club Talk",
    description: `Hosted a series of talks dubbed 'Minimalist approach to building fast', diving into how to easily build web applications with Flask.`,
    link: "https://gdsc.community.dev/events/details/developer-student-clubs-jomo-kenyatta-university-of-agriculture-and-technology-presents-we-are-hosting-grishon-nganga",
  },
];
export default function Page() {
  return (
    <div className="">
      <PageLayout backgroundColor="bg-sky-50">
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
              Wall of fame<span className="text-[#4c5544]">.</span>
            </div>
            {/* <JobsSectionLinks /> */}
          </div>
          <div className="lg:container lg:mt-0 mb-20 flex flex-col items-center">
            <div className="">
              <div className="w-full flex justify-center flex flex-col lg:flex-row flex-wrap gap-5 mt-10 justify-items-stretch">
                {features.map((feature, idx) => {
                  return (
                    <Link
                      key={idx}
                      className={`lg:w-1/4 flex flex-col cursor-pointer`}
                      href={feature.link}
                      target="_blank"
                    >
                      <motion.div
                        initial={{ scale: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -20 }}
                      >
                        <Card className="">
                          <div>
                            <CardContent className="p-0 w-full">
                              <Image
                                src={feature.image}
                                width={1000}
                                height={1000}
                                className="w-full object-cover aspect-video rounded-t-lg"
                                alt={feature.title}
                              />
                            </CardContent>
                            <CardHeader className="flex flex-col  grow">
                              <CardTitle className="text-lg line-clamp-2 grow">
                                {feature.title}
                              </CardTitle>
                              <CardDescription className="line-clamp-3 leading-relaxed grow">
                                {feature.description}
                              </CardDescription>
                            </CardHeader>
                          </div>
                        </Card>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </PageLayout>
    </div>
  );
}
