import React from 'react';
import {TECH_ALL, TechUi} from "@/entities/tech";

export const TechSlider = () => {
  return (
    <div className='col-span-12 flex justify-center gap-10 py-6' aria-hidden={true}>
      {TECH_ALL.map(item => (
        <div key={item.id} className='w-fit flex items-center gap-2 text-5xl font-black'>
          <TechUi id={item.id} className='w-12 h-12'/>
          <span>{item.label.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};