import { faqData } from "@/constants";
import React from "react";

const QuestionCard = () => {
  return (
    <div className="mt-16 flex items-center gap-5">
      {faqData.map((data) => (
        <div
          className="flex h-auto w-[413px] flex-col gap-[30px] rounded-[10px] border border-[#262626] bg-[#141414] p-10"
          key={data.id}
        >
          <h3 className="property-text">{data.title}</h3>
          <h4 className="fade-text">{data.answer}</h4>
          <button className="read-more-text w-fit rounded-[10px] border border-gray-800 bg-gray-900 px-5 py-[14px]">
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
