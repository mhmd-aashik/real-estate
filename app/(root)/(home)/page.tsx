import Client from "@/components/home/Client";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import Properties from "@/components/home/Properties";
import Questions from "@/components/home/Questions";
import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />
      <Features />
      <Properties />
      <Client />
      <Questions />
      <Journey />
    </div>
  );
};

export default Home;
