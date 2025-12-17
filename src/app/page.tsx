import {MilestonesView, OriginView, PlaygroundView, TechStackView, TechView} from '@/view';
import {Line} from "@/shared";
import React from "react";
import {AboutView} from "@/view/about";
import {ProjectView} from "@/view/project";
import {TechSlider} from "@/features/tech-slider/tech-slider";

export default function Home() {
  return (
    <main className='grid grid-cols-12 mx-auto max-w-5xl gap-x-6 gap-y-16 px-4 sm:px-8'>
      <AboutView/>
      <TechSlider/>
      <ProjectView/>
    </main>
  );
}
