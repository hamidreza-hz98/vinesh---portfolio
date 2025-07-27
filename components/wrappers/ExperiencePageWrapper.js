"use client";

import React, { useRef, useState } from "react";

import BlurText from "../ui/reactbits/BlurText";
import Container from "../common/Container";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/link";
import Lottie from "lottie-react";
import ScrambledText from "../ui/reactbits/ScrambleText";
import Silk from "../ui/reactbits/Silk";
import StarBorder from "../ui/reactbits/StarBorder";
import { experiences } from "@/constants/experiences";
import { getCurrentLocale } from "@/utils/locale";
import scrollDownAnimation from "@/public/animations/scroll-down.json";
import { useTranslations } from "next-intl";

const ExperiencePageWrapper = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const descriptionRef = useRef(null);

  const t = useTranslations();
  const locale = getCurrentLocale();

  const isMobile = () => window.innerWidth < 768;

 const handleClickFolder=(experience) => {
  setSelectedExperience(experience);
  setTimeout(() => {
    if (isMobile() && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}


  return (
    <>
      <div className="w-full h-screen relative sm:overflow-hidden">
        <Silk
          speed={7}
          scale={1}
          color="#8c7bfa"
          noiseIntensity={1}
          rotation={0}
        />

        <Container>
          <BlurText
            text={t("experience_page_header")}
            delay={1000}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold"
          />

          <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".._."}
          >
            {t("experience_page_description")}
          </ScrambledText>

          <div className="mt-2 p-4 flex items-center justify-center">
            <h2 className="text-xl me-2"> {t("project_in_mind")} </h2>
            <StarBorder
              href="/contact"
              as={Link}
              className="bg-background/20"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div
  className="md:col-span-4 overflow-x-auto scrollbar-hide flex md:block gap-4 md:gap-0 md:overflow-visible"
>
  {experiences.map((experience, index) => {
    const isSelected = selectedExperience === experience;

    return (
      <div
        key={index}
        onClick={() => handleClickFolder(experience)}
        className={`
          flex-shrink-0 w-[250px] md:w-full relative cursor-pointer transition-all duration-700
          ${isSelected ? "scale-[105%]" : "blur-[3px] hover:blur-[1px]"}
        `}
      >
        <img
          src="/images/general/folder.svg"
          alt={experience.role[locale]}
          className="w-full"
        />

        <div
          className={`absolute w-[70%] z-10 top-[60%] left-1/2  -translate-x-1/2 -translate-y-1/2 text-start`}
        >
          <p className="text-lg font-bold whitespace-nowrap">
            {experience.role[locale]}
          </p>
          <p className="text-md font-semibold whitespace-nowrap">
            {experience.company[locale]}
          </p>
          <p className="text-sm mt-2 whitespace-nowrap">
            {experience.period.from} to {experience.period.to}
          </p>
        </div>
      </div>
    );
  })}
</div>


          <div className="md:col-span-8" ref={descriptionRef}>
            <div>
              {selectedExperience.descriptions.map((description, index) => (
                <div key={index} className="mt-4">
                  <div className="flex items-start gap-2 flex-wrap sm:flex-nowrap">
  <FaRegCircle className="min-w-[1rem] mt-1 text-sm sm:text-base" />
  <span className="text-base sm:text-lg font-bold">{description.title[locale]}:</span>
</div>

                  
                    <div className="dynamic-content" dangerouslySetInnerHTML={{__html: description.description[locale]}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePageWrapper;
