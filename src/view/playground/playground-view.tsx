import React from 'react';
import {ProjectCard} from "@/features";

export const PlaygroundView = () => {
  return (
    <section id="playground-section" className="flex h-[100vh] flex-col items-start justify-start">
      <header>
        <h2 className="mx-auto mt-32 mb-5 w-full max-w-3xl bg-gradient-to-b from-[#F4B400] to-white bg-clip-text px-4 text-4xl font-bold text-transparent md:mt-10 md:mb-16 md:max-w-6xl lg:ml-20 lg:text-6xl 2xl:text-7xl">
          Playground
        </h2>
      </header>
      <div className="relative mb-0 flex w-full gap-10 before:absolute before:top-0 before:h-[2px] before:w-[50000vw] before:bg-white before:content-[''] after:absolute after:top-[100%] after:h-[2px] after:w-[50000vw] after:bg-white after:content-[''] lg:h-[80%]">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section>
  );
};
