import React from "react";
import {AboutView} from "@/view/about";
import {ProjectView} from "@/view/project";
import {TechSlider} from "@/features/tech-slider/tech-slider";
import {Footer, Header} from "@/widgets/layout";

export default function Home() {
  return (
    <div className='min-h-screen grid grid-cols-12 grid-rows-[var(--height-header)_1fr_var(--height-slider)_var(--height-footer)] md:grid-rows-[var(--height-header-md)_1fr_var(--height-slider-md)_var(--height-footer-md)] lg:grid-rows-[var(--height-header-lg)_1fr_var(--height-slider-lg)_var(--height-footer-lg)] max-w-7xl mx-auto gap-4 px-4 sm:px-6 py-6'>
      <Header/>
      <main className='col-span-12 row-span-1'>
        <AboutView/>
      </main>
      <TechSlider/>
      <Footer/>
    </div>
  );
}
