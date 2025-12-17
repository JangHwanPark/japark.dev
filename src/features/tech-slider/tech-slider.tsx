'use client'
import React from 'react';
import {motion} from "framer-motion";
import {TECH_ALL, TechUi} from "@/entities/tech";

export const TechSlider = () => {
  return (
    <div className='col-span-12 overflow-x-hidden flex py-6' aria-hidden={true}>
      <motion.div
        className='flex gap-10 justify-center'
        animate={{x: ["0%", "-50%"]}}
        transition={{repeat: Infinity, duration: 60, ease: "linear"}}
      >
        {TECH_ALL.map(item => (
          <div key={item.id} className='w-fit flex items-center gap-2 text-5xl font-black'>
            <TechUi id={item.id} className='w-12 h-12'/>
            <span>{item.label.toUpperCase()}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};