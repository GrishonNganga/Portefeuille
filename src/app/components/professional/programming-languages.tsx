import Image from "next/image";
import { Silkscreen } from "next/font/google";

const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

export default function ProgrammingLanguages() {
  return (
    <div className="w-full h-full flex flex-col pb-10">
      <div className="p-4">
        <div
          className={`text-3xl lg:text-6xl text-[#748069] font-bold ${silk.className}`}
        >
          Programming Languages<span className="text-[#4c5544]">.</span>
        </div>
        {/* <JobsSectionLinks /> */}
      </div>
      <div className="flex md:p-4 gap-x-1 flex-wrap gap-y-3">
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/html.png"
            className="w-full object-scale-down"
            alt="HTML"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/css.png"
            className="w-full h-full object-scale-down"
            alt="CSS"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/js.png"
            className="w-full h-full object-scale-down"
            alt="Javascript"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/react.png"
            className="w-full h-full object-scale-down"
            alt="React"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/nodejs.png"
            className="w-full h-full object-scale-down"
            alt="NodeJS"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/next-js.svg"
            className="w-full h-full object-scale-down"
            alt="Next JS"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/python.png"
            className="w-full h-full object-scale-down"
            alt="Python"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/django.png"
            className="w-full h-full object-scale-down"
            alt="Django"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/flask.svg"
            className="w-full h-full object-scale-down"
            alt="Flask"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/mongodb.png"
            className="w-full h-full object-scale-down"
            alt="Mongo DB"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/postgresql.png"
            className="w-full h-full object-scale-down"
            alt="PostgreSQL"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/jest.png"
            className="w-full h-full object-scale-down"
            alt="Jest"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/jenkins.jpeg"
            className="w-full h-full object-scale-down"
            alt="Jest"
          />
        </div>
        <div className="w-12 h-12">
          <Image
            width={50}
            height={50}
            src="/docker.png"
            className="w-full h-full object-scale-down"
            alt="Docker"
          />
        </div>
      </div>
    </div>
  );
}
