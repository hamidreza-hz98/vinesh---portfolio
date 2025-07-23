"use client"; // Required for client-side logic

import { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const setCookie = (name, value, days = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export default function LanguageSwitcher() {
  const t = useTranslations()
  const [locale, setLocale] = useState("fa");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flags = {
    en: "/images/flags/us.png",
    pt: "/images/flags/pt.png",
    fa: "/images/flags/ir.png",
  };

  const languages = {
    en: "English",
    pt: "Português",
    fa: "فارسی",
  };

  useEffect(() => {
    const storedLocale = getCookie("NEXT_LOCALE") || "en";
    setLocale(storedLocale);
    document.documentElement.dir =
      storedLocale === "fa" ? "rtl" : "ltr";
  }, []);

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
    setCookie("NEXT_LOCALE", newLocale);
    document.documentElement.dir =
      newLocale === "fa" ? "rtl" : "ltr";
    window.location.reload();
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center justify-end">

      <button
        onClick={toggleDropdown}
        className="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
        aria-label="Select Language"
        >
        <img
          src={flags[locale]}
          alt={languages[locale]}
          className="w-8 h-8 rounded-full"
          />
      </button>
          </div>

      {isOpen && (
        <ul className="absolute mt-2 w-36 border border-border bg-background rounded-2xl shadow-lg z-10 end-0">
          {Object.keys(flags).map((key) => (
            <li
              key={key}
              onClick={() => handleLanguageChange(key)}
              className="flex items-center gap-2 p-2 cursor-pointer hover:rounded-lg hover:bg-primary"
            >
              <img
                src={flags[key]}
                alt={languages[key]}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-foreground text-sm">{languages[key]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
