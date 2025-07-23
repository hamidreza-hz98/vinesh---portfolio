import { Button } from "../ui/button";
import DarkVeil from "../ui/reactbits/DarkVeil";
import GlassIcons from "../ui/reactbits/GlassIcons";
import Link from "next/link";
import React from "react";
import RotatingText from "../ui/reactbits/RotatingText";
import ShinyText from "../ui/reactbits/ShinyText";
import TextType from "../ui/reactbits/TextType";
import { getCurrentLocale } from "@/utils/locale";
import { homepageIcons } from "@/constants/homepage";
import { useTranslations } from "next-intl";

const HomepageWrapper = () => {
  const t = useTranslations();
  const locale = getCurrentLocale();

  return (
    <div className="w-full min-h-screen sm:h-screen relative sm:overflow-hidden">
      <DarkVeil speed={1} />

      <div className="absolute inset-0 top-16 flex flex-col items-center justify-center">
        <div className="text-start px-4">
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
        </div>

        <div className="mt-2 p-4 flex items-center justify-center">
          <h2 className="text-xl me-2"> {t("project_in_mind")} </h2>

          <ShinyText
            href="/contact"
            text={t("lets_talk")}
            disabled={false}
            speed={1}
            className=""
          />
        </div>

        <div className="sm:mt-2">
          <GlassIcons items={homepageIcons} className="custom-class" />
        </div>
      </div>
    </div>
  );
};

export default HomepageWrapper;
