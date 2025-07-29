"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getCurrentLocale, setLangDirection } from "@/utils/locale";

import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx"; // Optional, for cleaner className handling
import { headerRoutes } from "@/constants/routes";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();
  const locale = getCurrentLocale();
  const direction = setLangDirection(locale);
  const isRTL = direction === "rtl";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-4xl z-[60]">
      <div
        className={clsx(
          "flex items-center justify-between px-6 py-2 border border-border rounded-full transition-all duration-300",
          scrolled ? "backdrop-blur-lg bg-background/25" : "backdrop-blur-sm"
        )}
      >
        <Link href={`/${locale}`} className="cursor-pointer flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            width={48}
            height={48}
            sizes="100vw"
            className="rounded-full"
            alt="Vinesh Tech Logo"
          />
          <span className="font-bold"> {t("vinesh_tech")} </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-4">
          {headerRoutes.map((route, index) => (
            <Link
              className="hover:text-primary transition"
              href={`/${locale}${route.link}`}
              key={index}
            >
              {route.name[locale]}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end">
          <LanguageSwitcher />
          <div className="flex items-center gap-2 sm:gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="sm:hidden p-2 rounded-md transition">
                  <RxHamburgerMenu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "left" : "right"} className="w-64 sm:w-80">
                <div className="flex flex-col gap-4 mt-4">
                  {headerRoutes.map((route, index) => (
                    <Link
                      key={index}
                      className="text-lg font-medium hover:text-primary transition"
                      href={`/${locale}${route.link}`}
                      onClick={() => setOpen(false)}
                    >
                      {route.name[locale]}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
