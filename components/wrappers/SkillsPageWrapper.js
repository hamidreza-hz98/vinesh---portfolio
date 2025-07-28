"use client";

import { getCurrentLocale, setLangDirection } from "@/utils/locale";

import Container from "../common/Container";
import LetterGlitch from "../ui/reactbits/LetterGlitch";
import Link from "next/link";
import Lottie from "lottie-react";
import React from "react";
import RotatingText from "../ui/reactbits/RotatingText";
import StarBorder from "../ui/reactbits/StarBorder";
import TiltedCard from "../ui/reactbits/TiltedCard";
import scrollDownAnimation from "@/public/animations/scroll-down.json";
import { skills } from "@/constants/skills";
import { useTranslations } from "next-intl";

const SkillsPageWrapper = () => {
  const t = useTranslations();
  const locale = getCurrentLocale();
  const direction = setLangDirection(locale);

  return (
    <>
      <div className="w-full h-screen relative sm:overflow-hidden">
        <LetterGlitch
          glitchColors={["#8c7bfa", "#ffc940", "#4af0d6"]}
          glitchSpeed={100}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />

        <Container className="px-4">
          <h1 className="text-foreground text-4xl font-bold">
            {t("skills_page_header")}
          </h1>

          <div
            className={`flex items-center justify-center mt-8 gap-4 ${
              direction === "rtl" && " flex-row-reverse space-x-reverse"
            }`}
          >
            <span className="text-foreground font-semibold text-2xl">
              {t("creative")}
            </span>

            <RotatingText
              texts={[
                t("skills_page_rotating_text_1"),
                t("skills_page_rotating_text_2"),
                t("skills_page_rotating_text_3"),
                t("skills_page_rotating_text_4"),
              ]}
              splitBy="words"
              mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </div>

          <div className="mt-2 p-4 flex items-center justify-center">
            <h2 className="text-xl me-2"> {t("project_in_mind")} </h2>
            <StarBorder
              href="/contact"
              as={Link}
              className=""
              color="#8c7bfa"
              speed="2s"
            >
              {t("contact")}
            </StarBorder>
          </div>
        </Container>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-12 h-12">
          <Lottie animationData={scrollDownAnimation} loop autoplay />
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <h2 className="mt-6 text-xl font-bold text-primary">
              {skill.name[locale]}
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 mt-4 gap-8">
              {skill.items.map((item) => (
                <TiltedCard
                  key={item.name[locale]}
                  imageSrc={item.icon}
                  altText={item.name[locale]}
                  captionText={item.description[locale]}
                  containerHeight="100px"
                  containerWidth="100px"
                  imageHeight="100px"
                  imageWidth="100px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text text-foreground text-sm px-2 py-1">
                      {item.name[locale]}
                    </p>
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsPageWrapper;
