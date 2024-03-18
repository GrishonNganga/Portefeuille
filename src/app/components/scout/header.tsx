import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

export default function Header() {
    return (
        <div className="flex justify-between items-center border-b p-8 px-0 lg:px-4">
            <div className="w-16">
                <Image src={"/scout.svg"} width={100} height={100} alt="Scout logo" />
            </div>
            <Link href="/">
                <div className="flex items-center hover:underline cursor-pointer">
                    <ArrowUpLeft />
                    Back to Portfolio
                </div>
            </Link>
        </div>
    )
}