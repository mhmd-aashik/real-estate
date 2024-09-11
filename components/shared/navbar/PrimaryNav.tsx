import { X } from "lucide-react";
import Link from "next/link";

function PrimaryNav() {
  return (
    <div className="mx-auto flex w-[1440px] items-center justify-center p-[14px]">
      <h3 className="text-nav">
        ✨Discover Your Dream Property with Estatein{" "}
        <Link href="/" className="underline underline-offset-1">
          Learn More
        </Link>
      </h3>
      <X className="size-[18px] cursor-pointer rounded-full bg-[#fff]/10 p-1 text-white" />
    </div>
  );
}

export default PrimaryNav;
