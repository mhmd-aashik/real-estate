import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Properties from "@/components/home/Properties";
import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />
      <Features />
      <Properties />
      <div className="mt-96 bg-black">a</div>
    </div>
  );
};

export default Home;
