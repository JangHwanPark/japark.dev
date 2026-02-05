import React from "react";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaEnvelope, FaFileAlt} from "react-icons/fa";
import {AboutView} from "@/view/about";
import {ProjectView} from "@/view/project";
import {TechSlider} from "@/features/tech-slider/tech-slider";
import {Footer, Header} from "@/widgets/layout";

const linkStyle = 'w-full h-[var(--height-header)] md:h-[var(--height-header-md)] lg:h-[var(--height-header-lg)] flex items-center justify-center gap-2 rounded-2xl font-semibold hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg';

export default function Home() {
  return (
    <div className='h-screen grid grid-cols-12 grid-rows-[var(--height-header)_1fr_auto_var(--height-slider)_var(--height-footer)] md:grid-rows-[var(--height-header-md)_1fr_auto_var(--height-slider-md)_var(--height-footer-md)] lg:grid-rows-[var(--height-header-lg)_1fr_auto_var(--height-slider-lg)_var(--height-footer-lg)] mx-auto gap-4 px-4 sm:px-6 py-6'>
      <Header/>
      <main className='col-span-12'>
        <AboutView/>
      </main>
      <section className='col-span-12 grid grid-cols-4 gap-4'>
        <div>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${linkStyle} bg-bg-2 text-text-1 hover:bg-bg-3`}>
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank" rel="noopener noreferrer" className={`${linkStyle} bg-bg-2 text-text-1 hover:bg-bg-3`}>
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank" rel="noopener noreferrer" className={`${linkStyle} bg-bg-2 text-text-1 hover:bg-bg-3`}>
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank" rel="noopener noreferrer" className={`${linkStyle} bg-bg-2 text-text-1 hover:bg-bg-3`}>
            <FaFileAlt className="text-xl" />
            <span>Resume</span>
          </Link>
        </div>
      </section>
      <TechSlider/>
      <Footer/>
    </div>
  );
}
