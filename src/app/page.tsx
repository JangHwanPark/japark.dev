import {MilestonesView, OriginView, PlaygroundView, TechView} from '@/view';
import {Line} from "@/shared";
import React from "react";

export default function Home() {
  return (
    <main className="grid grid-cols-12 mx-auto max-w-screen-xl gap-x-6 gap-y-16 px-4 sm:px-8">
      <Line.Linear />
      <OriginView/>
      <Line.Root className="relative w-full lg:block">
        <Line.CurveFirst className="h-52 lg:ml-38 lg:w-8/12 xl:ml-112 xl:w-6/12" />
        <Line.CurveLast className="h-72 w-4/12 lg:ml-38 xl:ml-112" />
      </Line.Root>
      <TechView/>
      <PlaygroundView/>
      <MilestonesView/>
    </main>
  );
}
