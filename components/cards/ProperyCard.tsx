import { propertyCard } from "@/constants";
import Image from "next/image";
import React from "react";
import bathroom from "@/assets/logos/bathroom.svg";
import bedroom from "@/assets/logos/bedroom.svg";
import villa from "@/assets/logos/villa.svg";
import {
  ArrowLeft,
  ArrowRight,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";

const ProperyCard = () => {
  return (
    <>
      <div className="mt-16 flex items-center gap-5">
        {propertyCard.map((data) => (
          <div
            className="flex h-auto w-[413px] flex-col gap-5 rounded-[10px] border border-[#262626] bg-[#141414] p-[30px]"
            key={data.id}
          >
            <div>
              <Image
                src={data.image}
                alt="property"
                width={353}
                height={255}
                draggable={false}
                className="rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="">
                <h4 className="property-text">{data.title}</h4>
                <h6 className="fade-text w-[353px]">
                  {data.description}
                  <span className="underline">Read More</span>
                </h6>
              </div>
              <div className="flex items-center gap-1.5">
                {[
                  { img: bedroom, alt: "bedroom", text: data.bedroom },
                  { img: bathroom, alt: "bathroom", text: data.bathroom },
                  { img: villa, alt: "villa", text: data.villa },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex w-fit items-center gap-1 rounded-[28px] border border-[#262626] bg-[#1A1A1A] px-[14px] py-[6px]"
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={22}
                      height={17}
                      draggable={false}
                    />
                    <h4 className="text-nav">{item.text}</h4>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-start">
                  <h6 className="fade-text">Price</h6>
                  <h3 className="property-text">${data.price}</h3>
                </div>
                <button className="text-nav rounded-[8px] bg-[#703BF7] px-5 py-[14px]">
                  View Property Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-10">
        <div className="flex items-center justify-between border-t border-[#262626] py-4">
          <h1 className="fade-text">
            <span className="text-white"> 01</span> of 10
          </h1>
          <div className="flex gap-1">
            <ArrowLeft className="size-6 rounded-full bg-[#262626] stroke-[#808080] p-1" />
            <ArrowRight className="size-6 rounded-full bg-[#262626] p-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperyCard;
