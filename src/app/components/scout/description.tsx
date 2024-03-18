import { CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Description() {
    return (
        <div className="py-8 lg:p-8 border-b">
            <CardTitle>
                Startup Directory
            </CardTitle>
            <CardDescription className="pt-4 lg:pt-8 tracking-wide">
                We scout for companies that have recently raised funding, so that you can join in the action before others do.
                <div className="flex mt-4">
                    <div>
                        Our sources:
                    </div>
                    <div className="pl-1 flex gap-x-3">
                        <Link className="hover:underline text-blue-500" href={"https://crunchbase.com"}>
                            Crunchbase
                        </Link>
                        <div>
                            More coming soon
                        </div>
                    </div>
                </div>
            </CardDescription>
        </div>
    )
}