import Image from "next/image";

export default function ProgrammingLanguages() {
    return (
        <div className="lg:w-1/4 flex flex-col lg:sticky top-0 border rounded-xl divide-y h-full">
            <div className="text-[#748069] font-bold p-4">
                Programming Languages / Frameworks
            </div>
            <div className="flex p-4 gap-x-1 flex-wrap gap-y-3">
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/html.png" className="w-full object-scale-down" alt="HTML" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/css.png" className="w-full h-full object-scale-down" alt="CSS" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/js.png" className="w-full h-full object-scale-down"
                        alt="Javascript" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/react.png" className="w-full h-full object-scale-down"
                        alt="React" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/nodejs.png" className="w-full h-full object-scale-down"
                        alt="NodeJS" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/next-js.svg" className="w-full h-full object-scale-down"
                        alt="Next JS" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/python.png" className="w-full h-full object-scale-down"
                        alt="Python" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/django.png" className="w-full h-full object-scale-down"
                        alt="Django" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/flask.svg" className="w-full h-full object-scale-down"
                        alt="Flask" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/mongodb.png" className="w-full h-full object-scale-down"
                        alt="Mongo DB" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/postgresql.png" className="w-full h-full object-scale-down"
                        alt="PostgreSQL" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/jest.png" className="w-full h-full object-scale-down" alt="Jest" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/jenkins.jpeg" className="w-full h-full object-scale-down"
                        alt="Jest" />
                </div>
                <div className="w-12 h-12">
                    <Image width={50} height={50} src="/docker.png" className="w-full h-full object-scale-down"
                        alt="Docker" />
                </div>
            </div>
        </div>
    )
}