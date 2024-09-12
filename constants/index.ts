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

//TODO client review data

export const clientReview = [
  {
    id: 1,
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    place: "USA, California",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    place: "USA, Florida",
    profile: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    id: 3,
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    place: "USA, Nevada",
    profile: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

//TODO FAQ data

export const faqData = [
  {
    id: 1,
    title: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: 2,
    title: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    id: 3,
    title: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

//TODO footer data
export const footerData = [
  {
    id: 1,
    name: "Home",
    home: [
      { id: 101, name: "Hero Screen" },
      { id: 102, name: "Features" },
      { id: 103, name: "Properties" },
      { id: 104, name: "Testimonials" },
      { id: 105, name: "FAQs" },
    ],
  },
  {
    id: 2,
    name: "About Us",
    about: [
      { id: 201, name: "Our Story" },
      { id: 202, name: "Our Works" },
      { id: 203, name: "How It Works" },
      { id: 204, name: "Our Team" },
      { id: 205, name: "Our Clients" },
    ],
  },
  {
    id: 3,
    name: "Properties",
    Properties: [
      { id: 301, name: "Portfolio" },
      { id: 302, name: "Categories" },
    ],
  },
  {
    id: 4,
    name: "Services",
    Services: [
      { id: 401, name: "Valuation Mastery" },
      { id: 402, name: "Strategic Marketing" },
      { id: 403, name: "Negotiation Wizardry" },
      { id: 404, name: "Closing Success" },
      { id: 405, name: "Property Management" },
    ],
  },
  {
    id: 5,
    name: "Contact Us",
    Contact: [
      { id: 501, name: "Contact Form" },
      { id: 502, name: "Our Offices" },
    ],
  },
];
