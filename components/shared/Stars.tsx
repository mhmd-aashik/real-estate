import Image from "next/image";
import React from "react";
import star from "@/assets/logos/star.svg";

const Stars = () => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-1">
      {stars.map((_, index) => (
        <Image
          src={star}
          alt="star"
          width={36}
          height={36}
          key={index}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default Stars;
