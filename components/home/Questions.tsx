import { ArrowLeft, ArrowRight, Sparkle, Sparkles } from "lucide-react";
import React from "react";
import QuestionCard from "../cards/QuestionCard";

const Questions = () => {
  return (
    <div className="mx-auto mt-20 w-[1280px]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-1">
          <Sparkles className="size-6 fill-[#666666] stroke-[#666666]" />
          <Sparkle className="size-[14px] fill-[#666666] stroke-[#666666]" />
          <Sparkle className="size-[6px] fill-[#666666] stroke-[#666666]" />
        </div>
        <h3 className="font-urbanist text-[38px] font-semibold leading-[57px] text-white">
          Frequently Asked Questions
        </h3>
        <div className="flex items-center justify-between">
          <h4 className="fade-text w-[975px]">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </h4>
          <button className="text-nav max-w-fit gap-2 rounded-[10px] border border-[#262626] bg-[#1A1A1A] px-5 py-[14px]">
            View All FAQ’s
          </button>
        </div>
      </div>
      <QuestionCard />
      <div className="pt-10">
        <div className="flex items-center justify-between border-t border-[#262626] py-4">
          <h1 className="fade-text">
            <span className="text-white"> 01</span> of 10
          </h1>
          <div className="flex gap-1">
            <ArrowLeft className="size-7 rounded-full bg-[#262626] stroke-[#808080] p-1" />
            <ArrowRight className="size-7 rounded-full bg-[#262626] p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
