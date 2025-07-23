import { CgWebsite } from "react-icons/cg";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaPersonDigging } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export const homepageIcons = [
  {
    icon: <CgWebsite size={24} />,
    color: 'purple',
    label: {
      en: "Works",
      pt: "Projetos",
      fa: "نمونه‌کارها"
    },
    href: "/works"
  },
  {
    icon: <FaPersonDigging size={24} />,
    color: 'purple',
    label: {
      en: "Experience",
      pt: "Experiência",
      fa: "تجربه‌ها"
    },
    href: "/experience"
  },
  {
    icon: <GiBrain size={24} />,
    color: 'purple',
    label: {
      en: "Skills",
      pt: "Habilidades",
      fa: "مهارت‌ها"
    },
    href: "/skills"
  },
  {
    icon: <FaPersonCircleQuestion size={24} />,
    color: 'purple',
    label: {
      en: "About",
      pt: "Sobre",
      fa: "درباره"
    },
    href: "/about"
  },
  {
    icon: <MdOutlineConnectWithoutContact size={24} />,
    color: 'purple',
    label: {
      en: "Contact",
      pt: "Contato",
      fa: "تماس"
    },
    href: "/contact"
  }
];
