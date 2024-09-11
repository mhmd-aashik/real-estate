import Image from "next/image";
import React from "react";
import { features } from "@/constants";
import arrow from "@/assets/logos/arrow.svg";

const Features = () => {
  return (
    <div>
      <div className="flex items-center justify-between rounded-[10px] border border-[#262626] bg-[#141414] p-3">
        {features.map((feature) => (
          <div
            className="relative flex h-[160px] w-[347px] flex-col items-center justify-center gap-3 rounded-[10px] border border-[#262626] bg-[#1A1A1A]"
            key={feature.id}
          >
            <Image
              src={feature.image}
              alt={feature.alt}
              width={60}
              height={60}
            />
            <h4 className="feature-text">{feature.title}</h4>
            <Image
              src={arrow}
              alt="arrow"
              width={26}
              height={26}
              className="absolute right-5 top-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
