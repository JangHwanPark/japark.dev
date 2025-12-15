import {MilestonesView, OriginView, PlaygroundView, TechStackView, TechView} from '@/view';
import {Line} from "@/shared";
import React from "react";
import {AboutView} from "@/view/about";
import {ProjectView} from "@/view/project";

export default function Home() {
  return (
    <main className='col-span-12'>
      <AboutView/>
      <ProjectView/>
      <TechStackView/>
      <OriginView/>
      <PlaygroundView/>
      <TechView/>
      <MilestonesView/>
    </main>
  );
}
