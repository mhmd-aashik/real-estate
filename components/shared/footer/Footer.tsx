import { footerData } from "@/constants";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logos/logo.svg";
import { Mail, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <div className="mx-auto mt-20 w-[1280px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <Image src={logo} alt="logo" width={113} height={32} />
          <div className="flex w-fit items-center gap-2 rounded-md border px-8 py-2">
            <Mail className="size-4 stroke-[#999]" />
            <h4 className="fade-text">Enter Your Email</h4>
            <Rocket className="ml-3 size-6" />
          </div>
        </div>
        <div className="flex items-start justify-end gap-20">
          {footerData.map((data) => (
            <div className="space-y-4">
              <h4 className="fade-text">{data.name}</h4>
              <div>
                <ul className="space-y-1">
                  {data?.home?.map((nav) => (
                    <li key={nav.id} className="fade-text">
                      {nav.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {data?.about?.map((nav) => (
                    <li key={nav.id} className="fade-text">
                      {nav.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-1">
                  {data?.Properties?.map((nav) => (
                    <li key={nav.id} className="fade-text">
                      {nav.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  {data?.Services?.map((nav) => (
                    <li key={nav.id} className="fade-text">
                      {nav.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  {data?.Contact?.map((nav) => (
                    <li key={nav.id} className="fade-text">
                      {nav.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
