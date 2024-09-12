import { clientReview } from "@/constants";
import Image from "next/image";
import React from "react";
import Stars from "../shared/Stars";

const ClientCard = () => {
  return (
    <div className="mt-16 flex items-center gap-5">
      {clientReview.map((data) => (
        <div
          className="flex h-auto w-[413px] flex-col gap-[30px] rounded-[10px] border border-[#262626] bg-[#141414] p-10"
          key={data.id}
        >
          <Stars />
          <div className="flex flex-col items-start gap-2.5">
            <h3 className="property-text">Exceptional Service!</h3>
            <h4 className="fade-text w-[333px]">
              Our experience with Estatein was outstanding. Their team's
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={data.profile}
              alt={data.name}
              width={60}
              height={60}
              draggable={false}
              className="rounded-[50%]"
            />
            <div className="flex flex-col items-start">
              <h4 className="profile-text">Wade Warren</h4>
              <h4 className="fade-text">USA, California</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientCard;
