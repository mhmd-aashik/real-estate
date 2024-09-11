"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logos/logo.svg";
import { usePathname } from "next/navigation";

function SecoendaryNav() {
  const pathName = usePathname();
  return (
    <div className="border-y-2 border-[#262626]">
      <div className="border-y-1 mx-auto flex w-[1440px] items-center justify-between px-20 py-[14px]">
        <Image
          src={logo}
          alt="logo"
          width={114}
          height={34}
          draggable={false}
        />
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-nav ${pathName === link.href ? "rounded-[8px] border border-[#262626] bg-[#141414] px-4 py-3" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <button className="text-nav rounded-[8px] bg-[#141414] px-5 py-[14px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecoendaryNav;
