import room from "@/assets/images/room.png";
import cam from "@/assets/images/cam.png";
import build from "@/assets/images/build.png";
import sun from "@/assets/images/sun.png";
import poolApart from "@/assets/images/pool-house.avif";
import dubaiApart from "@/assets/images/dubai-apart.avif";
import nightApart from "@/assets/images/night-apart.avif";

//TODO NavLink data
export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Properties",
    href: "/property",
  },
  {
    id: 4,
    name: "Services",
    href: "/service",
  },
];

//TODO features data
export const features = [
  {
    id: 1,
    title: "Find Your Dream Home",
    image: room,
    alt: "room",
  },
  {
    id: 2,
    title: "Unlock Property Value",
    image: cam,
    alt: "cam",
  },
  {
    id: 3,
    title: "Effortless Property Management",
    image: build,
    alt: "build",
  },
  {
    id: 4,
    title: "Smart Investments, Informed Decisions",
    image: sun,
    alt: "sun",
  },
];

//TODO propertyCard data

export const propertyCard = [
  {
    id: 1,
    image: poolApart,
    alt: "poolApart",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    bedroom: "4-Bedroom",
    bathroom: "3-Bathroom",
    villa: "Villa",
    price: "555,000",
  },
  {
    id: 2,
    image: dubaiApart,
    alt: "dubaiApart",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    villa: "Villa",
    price: "550,000",
  },
  {
    id: 3,
    image: nightApart,
    alt: "nightApart",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
    bedroom: "3-Bedroom",
    bathroom: "3-Bathroom",
    villa: "Villa",
    price: "550,000",
  },
];
