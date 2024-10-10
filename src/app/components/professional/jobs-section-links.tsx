import Image from "next/image"
import Link from "next/link"

export default function JobsSectionLinks() {
    return (
        <div className="flex gap-x-3 divide-x-2 items-center">
            <Link prefetch={false} className="w-16 h-full lg:pl-3" href="https://www.github.com/GrishonNganga" target="_blank">
                <div className="">
                    <Image width={50} height={50} src="/github.png" alt="Github logo" />
                </div>
            </Link>
            <Link prefetch={false} href="https://drive.google.com/file/d/10kmeL7cBiy2Ah7ZW5I9-nSqn8m1RJFEQ/view?usp=sharing"
                target="_blank">
                <div className="flex items-center pl-3">
                    <div className="text-sm text-[#748069] font-bold">
                        Resume
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6 text-[#748069]">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </div>
                </div>
            </Link>
            <Link prefetch={false} className="w-20 h-full pl-3" href="https://www.linkedin.com/in/grishon-nganga/"
                target="_blank">
                <div>

                    <Image width={50} height={50} src="/linkedin.png" alt="LinkedIn logo" />
                </div>
            </Link>
        </div>
    )
}