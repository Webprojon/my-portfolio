"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
const {ref} = useSectionInView("Projects", 0.5)
  return (
    <section ref={ref}  id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <p className="mb-3 text-center">
        My projects are a lot, some of them below but for{" "}
        <a
          className="font-medium"
          href="https://github.com/Webprojon"
          target="_blanck"
        >
          more...
        </a>
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
