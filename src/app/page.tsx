import {MilestonesView, OriginView, PlaygroundView, TechView} from '@/view';
import {Line} from "@/shared";
import React from "react";

export default function Home() {
  return (
    <main className='col-span-12'>
      <OriginView/>
      <PlaygroundView/>
      <TechView/>
      <MilestonesView/>
    </main>
  );
}
