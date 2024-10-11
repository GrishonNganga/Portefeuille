import Image from "next/image";

export default function TopNav() {
    return (
        <div className="fixed top-0 p-10 w-full flex justify-between">
            <div>
                <Image src={"/grish-logo.svg"} width={100} height={100} className="w-14" alt="Grish logo"/>
            </div>
        </div>
    )
}