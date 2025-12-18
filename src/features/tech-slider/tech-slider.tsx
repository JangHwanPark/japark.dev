'use client'
import React from 'react';
import {TECH_ALL, TechUi} from "@/entities/tech";

const SLIDER_ITEM = [...TECH_ALL, ...TECH_ALL];

export const TechSlider = () => {
  return (
    <div className='col-span-12 overflow-x-hidden flex py-6 fade-mask' aria-hidden={true}>
      <div className='flex gap-10 justify-center animate-marquee'>
        {SLIDER_ITEM.map((item, index) => (
          <div key={`${item.id}-${index}`} className='w-fit flex items-center gap-2 text-5xl font-black'>
            <TechUi id={item.id} className='w-12 h-12'/>
            <span>{item.label.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};