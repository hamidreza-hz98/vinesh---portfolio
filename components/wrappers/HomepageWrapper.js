"use client"

import Container from "../common/Container";
import DarkVeil from "../ui/reactbits/DarkVeil";
import GlassIcons from "../ui/reactbits/GlassIcons";
import React from "react";
import ShinyText from "../ui/reactbits/ShinyText";
import TextType from "../ui/reactbits/TextType";
import { getCurrentLocale } from "@/utils/locale";
import { homepageIcons } from "@/constants/homepage";
import { useTranslations } from "next-intl";

const HomepageWrapper = () => {
  const t = useTranslations();
  const locale = getCurrentLocale();

  return (
    <>
      <div className="w-full h-screen relative sm:overflow-hidden">

      <DarkVeil speed={2} />

        <Container>
          <TextType
            text={[
              t("homepage_type_text_1"),
              t("homepage_type_text_2"),
              t("homepage_type_text_3"),
              t("homepage_type_text_4"),
            ]}
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
            className="text-lg sm:text-4xl"
          />

          <h2 className="text-xl me-2"> {t("project_in_mind")} </h2>

          <ShinyText
            href={`/${locale}/contact`}
            text={t("lets_talk")}
            disabled={false}
            speed={1}
            className=""
          />

        <div className="sm:mt-2">
          <GlassIcons items={homepageIcons} className="custom-class" />
        </div>
        </Container>
      </div>
    </>
  );
};

export default HomepageWrapper;
