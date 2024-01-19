import {
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  tm1,
  tm2,
  tm3,
  tm4,
} from "../assets";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

export const navLinks = [
  {
    id: "nav-1",
    title: "Acasa",
    route: "/",
  },
  {
    id: "nav-2",
    title: "Despre",
    route: "/about",
  },
  {
    id: "nav-3",
    title: "Servicii",
    subLinks: [
      {
        id: "nav-3.1",
        title: "Servicii",
        route: "/services",
      },
      {
        id: "nav-3.2",
        title: "Servicii detaliate",
        route: "/servicesdetail",
      },
    ],
  },
  {
    id: "nav-5",
    title: "Contact",
    route: "/contact",
  },
];

export const servicesConstants = [
  {
    id: "service-1",
    image: s1,
    title: "Constructii",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "service-2",
    image: s2,
    title: "Renovare",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "service-3",
    image: s3,
    title: "Sanitare",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
  {
    id: "service-4",
    image: s4,
    title: "Electrice",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
  {
    id: "service-5",
    image: s5,
    title: "Pardoseala",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
  {
    id: "service-6",
    image: s6,
    title: "Acoperis",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const projectsConstants = [
  {
    id: "project-1",
    image: p1,
    title: "Project #1",
    content: "Buhusi, Romania",
  },
  {
    id: "project-2",
    image: p2,
    title: "Project #2",
    content: "Timisoara, Romania",
  },
  {
    id: "project-3",
    image: p3,
    title: "Project #3",
    content: "Bucuresti, Romania",
  },
  {
    id: "project-4",
    image: p4,
    title: "Project #4",
    content: "Constanta, Romania",
  },
  {
    id: "project-5",
    image: p5,
    title: "Project #5",
    content: "Onesti, Romania",
  },
  {
    id: "project-6",
    image: p6,
    title: "Project #6",
    content: "Cluj-Napoca, Romania",
  },
];

export const teamConstants = [
  {
    id: "teammember-1",
    image: tm1,
    title: "Andreea Ionel",
    content: "Inginer",
  },
  {
    id: "teammember-2",
    image: tm2,
    title: "Valentin Ifrim",
    content: "Arhitect",
  },
  {
    id: "teammember-3",
    image: tm3,
    title: "George Antonovici",
    content: "Inginer",
  },
  {
    id: "teammember-4",
    image: tm4,
    title: "Cristina Mihailescu",
    content: "Proiectant",
  },
];

export const footerConstants = [
  {
    id: "footercol-1",
    title: "Birou in Onesti",
    content: [
      {
        icon: FaPhone,
        text: "+40712345678",
      },
      {
        icon: IoIosMail,
        text: "toderica.solutions@gmail.com",
      },
      {
        icon: FaLocationDot,
        text: "Str.Industriilor, Nr.1C",
        to: "https://maps.app.goo.gl/suCugwAP2TNVWVYH9",
      },
      {
        icon: FaClock,
        text: "Luni - Vineri: 08.00 - 16.00",
      },
    ],
  },
  {
    id: "footerccol-2",
    title: "Link-uri rapide",
    content: [
      {
        icon: FaLongArrowAltRight,
        text: "Despre noi",
        to: "/about",
        target: "about",
      },
      {
        icon: FaLongArrowAltRight,
        text: "Servicii",
        to: "/services",
        target: "services",
      },
      { icon: FaLongArrowAltRight, text: "Echipa noastra", target: "team" },
      { icon: FaLongArrowAltRight, text: "Proiecte", target: "projects" },
      {
        icon: FaLongArrowAltRight,
        text: "Contacteaza-ne",
        to: "/contact",
        target: "contact",
      },
    ],
  },
  {
    id: "footerccol-3",
    title: "Serviciile noastre",
    icon: "FaArrowRight",
    content: [
      { icon: FaLongArrowAltRight, text: "Proiectare" },
      { icon: FaLongArrowAltRight, text: "Constructii" },
      { icon: FaLongArrowAltRight, text: "Renovare" },
    ],
    typesOfConstruction: [
      "Instalatii sanitare",
      "Acoperis",
      "Pardoseala",
      "Electrice",
    ],
  },
];

export const bannerConstants = [
  { title: "Despre noi", path: "Acasa Despre", id: "about" },
  { title: "Serviciile noastre", path: "Acasa Servicii", id: "services" },
  { title: "Servicii detaliate", path: "Acasa Servicii detaliate", id: "servicesdetalied" },
];
