import React from "react";
import rj from "@/assets/images/rj.png";
import lj from "@/assets/images/lj.png";
import Image from "next/image";

const Journey = () => {
  return (
    <div className="relative mx-auto mt-5 flex h-[258px] w-[1280px] items-center justify-center">
      <div className="flex items-center gap-[140px]">
        <div className="z-10 flex flex-col gap-2.5">
          <h3 className="banner-text w-[979px]">
            Start Your Real Estate Journey Today
          </h3>
          <h5 className="fade-text w-[979px]">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </h5>
        </div>
        <button className="text-nav z-10 h-fit w-fit rounded-[8px] bg-[#703BF7] px-5 py-[14px]">
          Explore Properties
        </button>
      </div>
      <Image
        src={lj}
        alt="left-ban"
        width={474}
        height={258}
        draggable={false}
        className="absolute -top-1 left-0"
      />
      <Image
        src={rj}
        alt="right-ban"
        width={569}
        height={258}
        draggable={false}
        className="absolute -top-1 right-0"
      />
    </div>
  );
};

export default Journey;
