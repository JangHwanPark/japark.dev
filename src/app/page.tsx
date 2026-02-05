import React from "react";
import {AboutView} from "@/view/about";
import {ProjectView} from "@/view/project";
import {TechSlider} from "@/features/tech-slider/tech-slider";
import {Footer, Header} from "@/widgets/layout";

export default function Home() {
  return (
    <div className='min-h-screen grid grid-cols-12 mx-auto max-w-5xl gap-6 px-4 sm:px-8 py-10'>
      <Header/>
      <main className='col-span-12'>
        <AboutView/>
        <TechSlider/>
      </main>
      <Footer/>
    </div>
  );
}
