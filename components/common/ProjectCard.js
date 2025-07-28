import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import { getCurrentLocale } from "@/utils/locale";
import { useTranslations } from "next-intl";

const ProjectCard = ({ project, className = "" }) => {
  const t = useTranslations()
  const locale = getCurrentLocale();

  return (
    <div className={`relative w-full h-fit rounded-xl hover:scale-[105%] transition-transform duration-700 ${className}`.trim()}>
      <div className="w-full min-h-[200px] overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.name[locale]}
          loading="lazy"
          className="rounded-xl object-cover w-full h-full"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-foreground/25 backdrop-blur shadow-xl rounded-2xl p-4">
        <div className="flex flex-col items-start justify-start w-full">
          <span className="text-background font-semibold">{project.name[locale]}</span>

          <div className="flex flex-col items-start justify-center mt-2 w-full">
            <a
              href={project.url}
              className="flex items-center justify-start text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              { t("visit") }

              <FaExternalLinkAlt className="mx-2" />
            </a>

            <div className="flex items-center justify-between text-background mt-1">
              <p className="text-xs">
              { t("technologies") }
              </p>

              <div className="flex items-center justify-start space-x-2 ms-2">
                {project.technologies.map((tech, index) => (
                  <a key={index} href={tech.url} target="_blank">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-4 h-4 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
