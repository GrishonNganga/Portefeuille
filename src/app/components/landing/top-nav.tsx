import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="md:fixed top-0 p-4 md:p-10 w-full flex justify-between">
      <div>
        <Link className="z-100" href="/">
          <Image
            src={"/grish-logo.svg"}
            width={100}
            height={100}
            className="w-8 md:w-14"
            alt="Grish logo"
          />
        </Link>
      </div>
    </div>
  );
}
