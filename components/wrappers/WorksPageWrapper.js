"use client";

import Beams from "../ui/reactbits/Beams";
import Container from "../common/Container";
import Lottie from "lottie-react";
import ProjectCard from "../common/ProjectCard";
import React from "react";
import TrueFocus from "../ui/reactbits/TrueFocus";
import { projects } from "@/constants/projects";
import scrollDownAnimation from "@/public/animations/scroll-down.json";
import { useTranslations } from "next-intl";

const WorksPageWrapper = () => {
  const t = useTranslations();

  return (
    <>
    <div className="w-full min-h-screen sm:h-screen relative sm:overflow-hidden">
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#A877FF"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />

      <Container>
        <TrueFocus
          sentence={t("works_page_true_focus_text")}
          manualMode={false}
          blurAmount={5}
          borderColor="#A877FF"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </Container>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-12 h-12">
        <Lottie animationData={scrollDownAnimation} loop autoplay />
      </div>
    </div>
    
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          projects.map((project, index) => 
            <ProjectCard key={index} project={project} />
          )
        }
      </div>
    </div>
    </>
  );
};

export default WorksPageWrapper;
