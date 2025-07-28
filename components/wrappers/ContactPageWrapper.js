"use client";

import ContactForm from "../common/ContactForm";
import Container from "../common/Container";
import LiquidChrome from "../ui/reactbits/LiquidChrome";
import React from "react";
import clsx from "clsx";
import { contactInfoItems } from "@/constants/contact";
import { getCurrentLocale } from "@/utils/locale";
import { useTranslations } from "next-intl";

const ContactPageWrapper = () => {
  const t = useTranslations();
  const locale = getCurrentLocale();

  return (
    <>
      <div className="w-full h-screen relative sm:overflow-x-hidden">
        <LiquidChrome
          baseColor={[0.1, 0, 0.1]}
          speed={0.5}
          amplitude={0.3}
          interactive={true}
        />

        <Container className="top-[60%] sm:top-[200px] md:top-[120px]">
          <div className="py-8 flex flex-col w-full sm:w-fit items-center sm:items-start justify-center sm:flex-row sm:justify-between gap-8 sm:gap-16">
            <div className="p-8 w-80 rounded-2xl shadow shadow-primary backdrop-blur-3xl ">
              <h1 className="text-2xl font-bold mb-4"> { t("contact_info") } </h1>

              {contactInfoItems.map((item, index) => (
                <a
                  className={clsx(
                    "px-6 py-4 mt-2 text-foreground flex items-center justify-start rounded-xl hover:scale-[105%] transition duration-400",
                    item.className
                  )}
                  key={index}
                  href={item.href}
                >
                  <item.icon className="me-2" />
                  <span> {item.title[locale]} </span>
                </a>
              ))}
            </div>

            <div className="p-8 w-80 rounded-2xl shadow shadow-primary backdrop-blur-3xl">
              <h1 className="text-2xl font-bold mb-4"> { t("contact_form_header") } </h1>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactPageWrapper;
