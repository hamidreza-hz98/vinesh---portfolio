import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoMailOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";

export const contactInfoItems = [
  {
    title: {
      en: "Phone Talk",
      pt: "Chamada Telefónica",
      fa: "تماس تلفنی",
    },
    href: "tel: +989371013786",
    className: "hover:bg-opacity-80 bg-primary",
    icon: IoPhonePortraitOutline,
  },
  {
    title: {
      en: "Whatsapp Chat",
      pt: "Bate-papo no WhatsApp",
      fa: "چت در واتساپ",
    },
    className: "hover:bg-opacity-80 bg-green-500",
    href: "https://wa.me/+989371013786",
    icon: FaWhatsapp,
  },
  {
    title: {
      en: "Telegram Chat",
      pt: "Bate-papo no Telegram",
      fa: "چت در تلگرام",
    },
    className: "hover:bg-opacity-80 bg-blue-500",
    href: "https://t.me/+16265785736",
    icon: FaTelegram,
  },
  {
    title: {
      en: "Instagram",
      pt: "Instagram",
      fa: "اینستاگرام",
    },
    className: "hover:bg-opacity-80 bg-gradient-to-r from-pink-500 to-yellow-500",
    href: "https://www.instagram.com/hamidreza_hz98/",
    icon: FaInstagram,
  },
  {
    title: {
      en: "LinkedIn",
      pt: "LinkedIn",
      fa: "لینکدین",
    },
    className: "hover:bg-opacity-80 bg-[#0270AD]",
    href: "https://www.linkedin.com/in/hamidreza-hassanzadeh-97560b22a/",
    icon: ImLinkedin,
  },
  {
    title: {
      en: "Email",
      pt: "Email",
      fa: "ایمیل",
    },
    className: "hover:bg-opacity-80 bg-gray-800",
    href: "mailto: hamidrezahz1999@gmail.com",
    icon: IoMailOutline,
  },
];
