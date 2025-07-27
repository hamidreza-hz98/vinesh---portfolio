/* eslint-disable react/no-unescaped-entities */
"use client";

import ScrollStack, { ScrollStackItem } from "../ui/reactbits/ScrollStack";

import CircularText from "../ui/reactbits/CircularText";
import Container from "../common/Container";
import { FaLaptopHouse } from "react-icons/fa";
import Galaxy from "../ui/reactbits/Galaxy";
import Lottie from "lottie-react";
import { LuWatch } from "react-icons/lu";
import { PiPersonSimpleHike } from "react-icons/pi";
import React from "react";
import { SiMusicbrainz } from "react-icons/si";
import scrollDownAnimation from "@/public/animations/scroll-down.json";
import { useTranslations } from "next-intl";

const AboutPageWrapper = () => {
  const t = useTranslations();

  return (
    <>
      <div className="w-full h-screen relative sm:overflow-hidden">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />

        <Container className="overflow-hidden">
          <div className="relative">
            <CircularText
              text={t("about_circular_text")}
              onHover="goBonkers"
              spinDuration={60}
              className=""
            />

            <h1 className="text-2xl text-center font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {t("about_me")}
              <br />
              {t("and")}
              <br />
              {t("vinesh_birth")}
            </h1>
          </div>
        </Container>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-12 h-12">
          <Lottie animationData={scrollDownAnimation} loop autoplay />
        </div>
      </div>

      <div className="max-w-5xl mx-auto h-[700px] lg:h-[550px] scrollbar-hide">
        <ScrollStack
          itemDistance={256}
          blurAmount={5}
          rotationAmount={1}
          className="scrollbar-hide"
        >
          <ScrollStackItem>
            <div className="w-full bg-primary rounded-2xl p-4">
              <div className="w-40 h-40 float-right">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/images/general/me.webp"
                  alt="Hamidreza Hassanzadeh"
                />
              </div>

              <div className="text-justify">
                <h2 className="sm:text-4xl font-bold italic mb-4">
                  {t("who_am_i")}
                </h2>

                <p className="text-sm sm:text-lg mb-3">{t("who_am_i_1")}</p>

                <p className="text-sm sm:text-lg mb-3">{t("who_am_i_2")}</p>

                <p className="text-sm sm:text-lg mb-3">{t("who_am_i_3")}</p>

                <p className="text-sm sm:text-lg">{t("who_am_i_4")}</p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full bg-destructive rounded-2xl p-4">
              <div className="w-40 h-40 float-right ms-2">
                <LuWatch className="w-full h-full" />
              </div>

              <div className="text-left">
                <h2 className="sm:text-4xl font-bold italic mb-4">
                  {t("my_journey")}
                </h2>

                <p className="text-sm sm:text-lg mb-3">{t("my_journey_1")}</p>

                <p className="text-sm sm:text-lg mb-3">{t("my_journey_2")}</p>

                <p className="text-sm sm:text-lg mb-3">{t("my_journey_3")}</p>

                <p className="text-sm sm:text-lg">{t("my_journey_4")}</p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full bg-primary rounded-2xl p-4">
              <div className="w-40 h-40 float-right ms-2">
                <FaLaptopHouse className="w-full h-full" />
              </div>

              <div className="text-left">
                <h2 className="sm:text-4xl font-bold italic mb-4">
                  {t("what_i_do")}
                </h2>

                <p className="text-sm sm:text-lg mb-3">{t("what_i_do_1")}</p>

                <p className="text-sm sm:text-lg mb-3">{t("what_i_do_2")}</p>

                <p className="text-sm sm:text-lg mb-3">{t("what_i_do_3")}</p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full bg-destructive rounded-2xl p-4">
              <div className="w-40 h-40 float-right ms-2">
                <SiMusicbrainz className="w-full h-full" />
              </div>

              <div className="text-left">
                <h2 className="sm:text-4xl font-bold italic mb-4">
                  {t("what_i_believe_in")}
                </h2>

                <p className="text-sm sm:text-lg mb-3">
                  {t("what_i_believe_in_1")}
                </p>

                <p className="text-sm sm:text-lg mb-3">
                  {t("what_i_believe_in_2")}
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full bg-primary rounded-2xl p-4">
              <div className="w-40 h-40 float-right ms-2">
                <PiPersonSimpleHike className="w-full h-full" />
              </div>

              <div className="text-left">
                <h2 className="sm:text-4xl font-bold italic mb-4">
                  {t("beyond_the_screen")}
                </h2>

                <p className="text-sm sm:text-lg mb-3">
                  {t("beyond_the_screen_1")}
                </p>

                <p className="text-sm sm:text-lg mb-3">
                  {t("beyond_the_screen_2")}
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full bg-destructive rounded-2xl p-4 flex items-center justify-center">
              <div className="p-6 w-fit border border-chart-5 rounded-2xl">
                <h3 className="text-2xl font-bold text-center">
                  {t("thanks_for_reading")}
                </h3>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </>
  );
};

export default AboutPageWrapper;
