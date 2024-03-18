import { Metadata } from "next";
import Header from "../components/scout/header";
import Description from "../components/scout/description";
import Image from "next/image";
import { Link2 } from "lucide-react";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Scout: Find companies recently raised funding",
    description: " Finds you companies that have recently raised funding",
    icons: "/scout.svg"
};


export default function Layout() {
    return (
        <div className="container">
            <Header />
            <Description />
            <div className="pt-8 flex flex-col gap-y-4">
                <div className="">
                    <div className="p-4 lg:p-8 flex gap-x-4 hover:bg-gray-50 rounded-lg">
                        <div className="w-20">
                            <Image src={"/airbnb.png"} width={50} height={50} className="w-full rounded-full" alt="Airbnb Logo" />
                        </div>
                        <div className="flex flex-col grow gap-y-2">
                            <div>
                                <CardTitle>
                                    Airbnb
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Book accommodations around the world.
                            </CardDescription>
                            <CardDescription>
                                Funding: Series A
                                Capital: 10,000,000
                            </CardDescription>
                            <div className="flex gap-x-3">
                                <Badge variant={"secondary"} className="flex items-center gap-x-1 font-light">
                                    <div className="w-5">
                                        <Image src={"/linkedin-logo.png"} width={50} height={50} alt="Linked Logo" className="object-cover" />
                                    </div>
                                    <div>
                                        LinkedIn
                                    </div>
                                </Badge>
                                <Badge variant={"secondary"} className="flex gap-x-1 items-center font-light">
                                    <Link2 size={20} />
                                    Website
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <div className="p-4 lg:p-8 flex gap-x-4 hover:bg-gray-50 rounded-lg">
                        <div className="w-20">
                            <Image src={"/airbnb.png"} width={50} height={50} className="w-full rounded-full" alt="Airbnb Logo" />
                        </div>
                        <div className="flex flex-col grow gap-y-2">
                            <div>
                                <CardTitle>
                                    Airbnb
                                </CardTitle>
                            </div>
                            <CardDescription>
                                Book accommodations around the world.
                            </CardDescription>
                            <CardDescription>
                                Funding: Series A
                                Capital: 10,000,000
                            </CardDescription>
                            <div className="flex gap-x-3">
                                <Badge variant={"secondary"} className="flex items-center gap-x-1 font-light">
                                    <div className="w-5">
                                        <Image src={"/linkedin-logo.png"} width={50} height={50} alt="Linked Logo" className="object-cover" />
                                    </div>
                                    <div>
                                        LinkedIn
                                    </div>
                                </Badge>
                                <Badge variant={"secondary"} className="flex gap-x-1 items-center font-light">
                                    <Link2 size={20} />
                                    Website
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}