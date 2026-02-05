'use client';
import React from "react";
import {FaGithub, FaLinkedin, FaEnvelope, FaFileAlt} from "react-icons/fa";
import {AboutView} from "@/view/about";
import {TechSlider} from "@/features/tech-slider/tech-slider";
import {SocialLinks} from "@/features/social-links";
import {Footer, Header} from "@/widgets/layout";

export default function Home() {
  return (
    <div className='h-screen grid grid-cols-12 grid-rows-[var(--height-header)_1fr_var(--height-footer)] md:grid-rows-[var(--height-header-md)_1fr_var(--height-footer-md)] lg:grid-rows-[var(--height-header-lg)_1fr_var(--height-footer-lg)] mx-auto gap-4 px-4 sm:px-6 py-6'>
      <Header/>
      <main className='col-span-12 flex flex-col gap-4'>
        <AboutView/>
        <SocialLinks.Root>
          <SocialLinks.Item>
            <SocialLinks.Link href="https://github.com" icon={FaGithub}>GitHub</SocialLinks.Link>
          </SocialLinks.Item>
          <SocialLinks.Item>
            <SocialLinks.Link href="#" icon={FaLinkedin}>LinkedIn</SocialLinks.Link>
          </SocialLinks.Item>
          <SocialLinks.Item>
            <SocialLinks.Link href="#" icon={FaEnvelope}>Email</SocialLinks.Link>
          </SocialLinks.Item>
          <SocialLinks.Item>
            <SocialLinks.Link href="#" icon={FaFileAlt}>Resume</SocialLinks.Link>
          </SocialLinks.Item>
        </SocialLinks.Root>
        <TechSlider/>
      </main>
      <Footer/>
    </div>
  );
}
