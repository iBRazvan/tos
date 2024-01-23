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
  constructii,
  sanitare,
  acoperis,
  renovare,
  electrice,
  proiectare,
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
  {
    title: "Servicii detaliate",
    path: "Acasa Servicii detaliate",
    id: "servicesdetalied",
  },
  { title: "Contacteaza-ne", path: "Acasa Contact", id: "contact" },
];

export const serviceDetailItems = [
  { id: "constructii", title: "Servicii de Construcții" },
  { id: "sanitare", title: "Servicii de Instalații Sanitare" },
  { id: "acoperis", title: "Servicii de Acoperiș" },
  { id: "renovare", title: "Servicii de Renovare" },
  { id: "electrice", title: "Servicii Electrice" },
  { id: "proiectare", title: "Servicii de Proiectare" },
];

export const serviceDetailedPage = [
  {
    id: "constructii",
    title: "Construcții",
    subtitle: "Soluții complete pentru proiectele tale de construcții",
    image: constructii,
    overview:
      "Oferim soluții complete pentru proiectele tale de construcții, asigurându-ne că fiecare detaliu este gestionat cu precizie. De la consultanță tehnică în faza de proiectare și coordonare logistică a șantierului, până la monitorizarea calității lucrărilor și implementarea măsurilor de sănătate și securitate în muncă, garantăm conformitatea cu cele mai înalte norme de construcții.",
    included: [
      "Consultanță tehnică în faza de proiectare",
      "Coordonare logistică a șantierului",
      "Monitorizarea calității lucrărilor",
      "Managementul resurselor umane și al echipamentelor",
      "Implementarea măsurilor de sănătate și securitate în muncă",
      "Asigurarea conformității cu normativele de construcții",
    ],
    constructionManagement: [
      {
        title: "Planificare Eficientă",
        description:
          "Planificăm și gestionăm resursele astfel încât proiectul să avanseze eficient și să respecte termenele stabilite.",
      },
      {
        title: "Controlul Calității",
        description:
          "Ne concentrăm pe asigurarea calității lucrărilor prin implementarea unor proceduri și standarde riguroase.",
      },
      {
        title: "Gestionarea Riscurilor",
        description:
          "Identificăm și gestionăm proactiv orice potențiale riscuri, asigurând succesul pe tot parcursul proiectului.",
      },
      {
        title: "Comunicare Transparentă",
        description:
          "Menținem o comunicare deschisă și transparentă, ținându-vă la curent cu evoluția proiectului în fiecare etapă.",
      },
      {
        title: "Bugetare Eficientă",
        description:
          "Gestionăm cu atenție bugetul proiectului, optimizând cheltuielile și oferindu-vă cea mai bună valoare pentru investiția dumneavoastră.",
      },
      {
        title: "Sănătate și Siguranță",
        description:
          "Prioritizăm sănătatea și siguranța, implementând măsuri stricte pentru a asigura un mediu de lucru sigur pentru toți.",
      },
    ],
  },
  {
    id: "sanitare",
    title: "Servicii de Instalații Sanitare",
    subtitle: "Soluții complete pentru instalațiile tale sanitare",
    image: sanitare,
    overview:
      "Echipa noastră de specialiști în instalații sanitare oferă soluții personalizate pentru a satisface nevoile proiectelor tale. De la proiectare și implementare, până la mentenanță și service, ne asigurăm că toate instalațiile sanitare funcționează optim și îndeplinesc cele mai exigente standarde de calitate.",
    included: [
      "Consultanță în proiectarea instalațiilor sanitare",
      "Montarea și întreținerea echipamentelor sanitare",
      "Verificarea și repararea instalațiilor existente",
      "Instalarea sistemelor de canalizare și evacuare",
      "Asigurarea conformității cu normele sanitare",
      "Testarea și verificarea calității apei",
    ],
    constructionManagement: [
      {
        title: "Proiectare Eficientă",
        description:
          "Proiectăm sisteme de instalații sanitare eficiente, ținând cont de economisirea resurselor și protejarea mediului înconjurător.",
      },
      {
        title: "Tehnologii Avansate",
        description:
          "Implementăm tehnologii avansate în domeniul instalațiilor sanitare pentru a asigura funcționarea optimă a sistemelor.",
      },
      {
        title: "Integrare Durabilă",
        description:
          "Avem în vedere aspecte de durabilitate în proiectarea și implementarea instalațiilor sanitare, contribuind la un viitor mai sustenabil.",
      },
      {
        title: "Soluții Personalizate",
        description:
          "Oferim soluții personalizate adaptate cerințelor specifice ale proiectului dumneavoastră.",
      },
      {
        title: "Testare Riguroasă",
        description:
          "Realizăm teste riguroase pentru a asigura funcționarea corectă și eficientă a sistemelor de instalații sanitare.",
      },
    ],
  },
  {
    id: "acoperis",
    title: "Servicii de Acoperiș",
    subtitle: "Soluții complete pentru acoperișul casei tale",
    image: acoperis,
    overview:
      "Specialiștii noștri în servicii de acoperiș aduc experiența și abilitățile necesare pentru a oferi soluții durabile și estetice. De la instalarea acoperișului și reparații, până la întreținere și servicii de impermeabilizare, ne ocupăm de toate aspectele legate de acoperișul clădirii tale.",
    included: [
      "Montarea și repararea acoperișurilor",
      "Tratarea și protejarea materialului de acoperiș",
      "Consiliere în alegerea materialelor potrivite",
      "Verificarea și curățarea șanturilor de scurgere",
      "Asigurarea impermeabilității acoperișului",
      "Izolarea termică a acoperișului",
    ],
    constructionManagement: [
      {
        title: "Expertiză în Acoperișuri",
        description:
          "Avem o echipă cu expertiză în lucrări la acoperișuri, oferind soluții durabile și eficiente.",
      },
      {
        title: "Materiale de Calitate",
        description:
          "Folosim materiale de cea mai înaltă calitate pentru a asigura rezistență și durabilitate acoperișului dumneavoastră.",
      },
      {
        title: "Eficiență Energetică",
        description:
          "Integrăm soluții de eficiență energetică în proiect, contribuind la economisirea de resurse și la un mediu mai curat.",
      },
      {
        title: "Mentenanță Preventivă",
        description:
          "Oferim servicii de mentenanță preventivă pentru a prelungi durata de viață a acoperișului și a evita problemele majore.",
      },
      {
        title: "Proiectare Personalizată",
        description:
          "Proiectăm acoperișuri personalizate, adaptate nevoilor specifice ale proiectului dumneavoastră.",
      },
    ],
  },
  {
    id: "renovare",
    title: "Servicii de Renovare",
    subtitle: "Transformă casa ta cu serviciile noastre de renovare",
    image: renovare,
    overview:
      "Indiferent dacă vrei să aduci un suflu nou unei locuințe vechi sau să redefinești spațiul unui birou, serviciile noastre de renovare acoperă toate aspectele procesului. De la proiectare și demolare, până la finisaje și decorare, suntem partenerul tău în transformarea spațiilor.",
    included: [
      "Renovarea spațiilor interioare și exterioare",
      "Refacerea instalațiilor electrice și sanitare",
      "Repararea și vopsirea pereților",
      "Inlocuirea parchetului și renovarea podelelor",
      "Modernizarea și optimizarea spațiilor",
      "Consiliere în alegerea materialelor de calitate",
    ],
    constructionManagement: [
      {
        title: "Design Modern",
        description:
          "Oferim servicii de renovare cu accent pe designul modern și funcționalitatea spațiului.",
      },
      {
        title: "Materiale Durabile",
        description:
          "Utilizăm materiale durabile și de calitate în procesul de renovare, asigurând rezultate de lungă durată.",
      },
      {
        title: "Optimizare Spațiu",
        description:
          "Efectuăm renovări cu accent pe optimizarea spațiului, creând ambientul potrivit pentru nevoile dvs.",
      },
      {
        title: "Consultanță Personalizată",
        description:
          "Oferim consultanță personalizată pentru a vă ghida în luarea celor mai bune decizii în procesul de renovare.",
      },
      {
        title: "Control Calitate",
        description:
          "Avem un proces riguros de control al calității pentru a asigura că fiecare detaliu al renovării este impecabil.",
      },
    ],
  },
  {
    id: "electrice",
    title: "Servicii Electrice",
    subtitle: "Soluții complete pentru instalațiile electrice",
    image: electrice,
    overview:
      "Echipa noastră de electricieni oferă servicii complete pentru proiectele tale electrice. De la proiectare și instalație, până la mentenanță și upgrade-uri, garantăm soluții sigure și eficiente pentru toate necesitățile tale electrice.",
    included: [
      "Instalarea și repararea sistemelor electrice",
      "Verificarea și testarea siguranței instalațiilor",
      "Modernizarea instalațiilor electrice existente",
      "Consiliere în alegerea echipamentelor potrivite",
      "Implementarea soluțiilor de economisire a energiei",
      "Asigurarea conformității cu normele de siguranță",
    ],
    constructionManagement: [
      {
        title: "Instalații Eficiente",
        description:
          "Proiectăm și implementăm instalații electrice eficiente, asigurând funcționarea optimă a sistemelor.",
      },
      {
        title: "Siguranță Electrică",
        description:
          "Prioritizăm siguranța electrică, implementând cele mai recente standarde și tehnologii în proiectele noastre.",
      },
      {
        title: "Integrare Tehnologică",
        description:
          "Integrăm tehnologii avansate în instalațiile electrice pentru a vă oferi soluții moderne și inteligente.",
      },
      {
        title: "Testare Riguroasă",
        description:
          "Realizăm teste riguroase pentru a asigura funcționarea corectă și sigură a instalațiilor electrice.",
      },
      {
        title: "Eficiență Energetică",
        description:
          "Implementăm concepte de eficiență energetică în proiect, contribuind la economisirea de energie pe termen lung.",
      },
    ],
  },
  {
    id: "proiectare",
    title: "Servicii de Proiectare",
    image: proiectare,
    subtitle: "Dezvoltă proiectul tău cu serviciile noastre de proiectare",
    overview:
      "Indiferent de tipul proiectului tău, echipa noastră de specialiști în proiectare aduce creativitate și experiență în fiecare detaliu. Oferim servicii de proiectare arhitecturală, design interior și consultanță pentru a transforma ideile tale în realitate, cu atenție la estetică și funcționalitate.",
    included: [
      "Consultanță în faza de proiectare",
      "Elaborarea documentațiilor tehnice",
      "Proiectarea detaliată a spațiilor interioare și exterioare",
      "Optimizarea funcționalității și esteticii proiectului",
      "Consiliere în alegerea materialelor și finisajelor",
      "Asigurarea conformității cu reglementările de urbanism",
    ],
    constructionManagement: [
      {
        title: "Design Personalizat",
        description:
          "Oferim servicii de proiectare cu accent pe designul personalizat, adaptat nevoilor și gusturilor clienților.",
      },
      {
        title: "Colaborare Strânsă",
        description:
          "Colaborăm strâns cu clienții în procesul de proiectare pentru a realiza exact viziunea și cerințele lor.",
      },
      {
        title: "Inovație Creativă",
        description:
          "Adoptăm abordări creative și inovatoare în procesul de proiectare, oferind soluții unice și atractive.",
      },
      {
        title: "Eficiență Funcțională",
        description:
          "Ne concentrăm pe eficiența funcțională în proiectare, creând spații care să îmbine utilitatea cu estetica.",
      },
      {
        title: "Consultanță Profesională",
        description:
          "Oferim consultanță profesională pentru a ghida clienții în luarea celor mai bune decizii în proiectarea spațiilor lor.",
      },
    ],
  },
];
