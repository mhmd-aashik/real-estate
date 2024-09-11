import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero.png";
import badge from "@/assets/images/badge.png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex w-full items-center gap-[60px]">
        <div className="flex flex-col items-start justify-center gap-[50px] pl-[80px]">
          <div className="flex w-[610px] flex-col gap-5">
            <h3 className="font-urbanist text-[46px] font-semibold leading-[55.2px] text-white">
              Discover Your Dream Property with Estatein
            </h3>
            <h4 className="fade-text">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </h4>
          </div>
          <div className="space-x-4">
            <button className="text-nav rounded-[8px] border border-[#262626] px-5 py-[14px]">
              Learn More
            </button>
            <button className="text-nav rounded-[8px] bg-[#703BF7] px-5 py-[14px]">
              Browse Properties
            </button>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex w-[192px] flex-col items-start gap-[2px] rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-[14px_20px]">
              <h4 className="count-text">200+</h4>
              <h5 className="fade-text">Happy Customers</h5>
            </div>
            <div className="flex w-[192px] flex-col items-start gap-[2px] rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-[14px_20px]">
              <h4 className="count-text">10k+</h4>
              <h5 className="fade-text">Properties For Clients</h5>
            </div>
            <div className="flex w-[192px] flex-col items-start gap-[2px] rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-[14px_20px]">
              <h4 className="count-text">16+</h4>
              <h5 className="fade-text">Years of Experience</h5>
            </div>
          </div>
        </div>

        <Image
          src={heroImage}
          alt="hero-img"
          width={690}
          height={622}
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 -top-80 left-10 flex items-center justify-center">
        <Image
          src={badge}
          alt="badge"
          width={129}
          height={129}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Hero;
