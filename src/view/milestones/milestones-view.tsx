'use client';
import React, {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dummy_data = [
  {year: '2024', position: 'Senior Developer', company: 'Tech Corp', description: 'Advanced full-stack development and team lead.'},
  {year: '2022', position: 'Frontend Engineer', company: 'Web Studio', description: 'Implemented major features using React and TypeScript.'},
  {year: '2020', position: 'Junior Developer', company: 'Startup Hub', description: 'Learned modern web practices and coding standards.'},
];

export const MilestonesView = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !timelineRef.current || !dotRef.current) return;
    const timelineHeight = timelineRef.current.offsetHeight + 100;
    const dotHeight = dotRef.current.offsetHeight;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '30% center',
        end: `+=${timelineHeight}`,
        scrub: true,
      },
    });
    timeline
      .fromTo(
        timelineRef.current,
        {height: '0%', opacity: 0},
        {height: `${timelineHeight}px`, opacity: 1, duration: 1.2, ease: 'power2.out'}
      )
      .fromTo(
        dotRef.current,
        {y: '0px'},
        {y: `${timelineHeight - dotHeight}px`, duration: 1.2, ease: 'power2.out'},
        '<'
      );

    const items = gsap.utils.toArray('li', {scope: sectionRef.current});
    items.forEach((item) => {
      gsap.fromTo(
        item as HTMLLIElement,
        {opacity: 0, y: 50},
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item as HTMLLIElement,
            start: 'top 85%',
            // markers: true,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section id="milestone-section"
             className="col-span-12 w-full max-w-screen-xl relative mx-auto mt-40 mb-28 flex flex-col items-center justify-center px-12 py-4 opacity-100 sm:px-8 md:px-20 lg:mt-0 lg:px-0 lg:py-[60px] xl:mb-32">
      <header>
        <h2
          className="xs:text-left mt-32 mb-12 bg-gradient-to-b from-[#F4B400] to-white bg-clip-text text-4xl leading-10 font-bold text-transparent md:text-center lg:mb-24 lg:text-6xl lg:leading-14 xl:leading-[70px] 2xl:text-7xl">Career
          timeline</h2>
      </header>
      {/* Content */}
      <div className="w-full relative mx-auto flex flex-col">
        {/* TimeLine */}
        <div
          className="from-white-bg via-accent absolute top-0 -left-3 h-full w-[3px] -translate-x-1/2 transform bg-[#F4B400] bg-gradient-to-t to-transparent md:-left-10 lg:top-[-50px] lg:left-1/2"/>
        <div
          className="absolute -left-3 h-[10px] w-[10px] -translate-x-1/2 transform rounded-full bg-[#ffd700] shadow-[0_0_5px_2px_#ffd700,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b] md:-left-10 lg:top-[-50px] lg:left-1/2"/>
        {/* Career */}
        <ol className="space-y-12 md:space-y-16 lg:space-y-32">
          {/* Item */}
          {dummy_data.map((data, index) => (
            <li key={index} className="mb-12 flex flex-col justify-between md:mb-16 md:gap-2 lg:mb-32 lg:flex-row lg:gap-14 lg:px-[8%] lg:last:mb-14">
              <div className="flex flex-row justify-between gap-[50px] lg:w-[40%]">
                <div className="flex w-full flex-col">
                  <h3 className="w-full text-xl leading-8 font-bold md:text-[22px] lg:w-[180px] lg:text-[33px] lg:leading-10">{data.position}</h3>
                  <h4 className="text-accent mt-[10px] w-full pb-5 text-lg font-normal capitalize md:text-[17px] lg:text-lg xl:text-[20px]">{data.company}</h4>
                </div>
                <time className="xs:text-2xl text-xl leading-[45px] font-medium md:text-[40px] lg:text-[48px]">{data.year}</time>
              </div>
              <p className="xs:text-base w-full text-sm font-light md:text-[18px] lg:w-[40%]">{data.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
