import {MilestonesView, OriginView, PlaygroundView, TechView} from '@/view';
import {Line} from "@/shared";
import React from "react";
import {AboutView} from "@/view/about";

export default function Home() {
  return (
    <main className='col-span-12'>
      <AboutView/>
      <OriginView/>
      <PlaygroundView/>
      <TechView/>
      <MilestonesView/>
    </main>
  );
}
