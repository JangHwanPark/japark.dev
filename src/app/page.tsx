import {MilestonesView, OriginView, PlaygroundView, TechView} from '@/view';
import {Line} from "@/shared";
import React from "react";

export default function Home() {
  return (
    <main className="grid grid-cols-12 mx-auto max-w-screen-xl gap-x-6 gap-y-16 px-4 sm:px-8">
      <Line.Linear/>
      <OriginView/>
      <Line.Root className="w-full col-span-8 col-start-3">
        <Line.CurveFirst className="h-52"/>
        <Line.CurveLast className="h-72"/>
      </Line.Root>
      <TechView/>
      <PlaygroundView/>
      <MilestonesView/>
    </main>
  );
}
