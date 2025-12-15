'use client';
import React, {useRef} from 'react';
import {Avatar, cn} from '@/shared';

const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

export const AboutView = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="about-section" aria-labelledby="origin-heading" className='col-span-12'>
      <div>
        <p>About</p>
        <h2 className='sr-only'>About</h2>
        <div className='grid grid-cols-6 grid-rows-5 gap-10'>
          <div className='col-span-4 row-span-2 border'>소개</div>
          <div className='col-span-2 row-span-3 border'>이미지</div>
          <div className='col-span-2 row-span-1 border'>위치 시간</div>
          <div className='col-span-2 row-span-2 border'>대표 프로젝트</div>
          <div className='col-span-2 row-span-1 border'>공부중</div>
          <div className='col-span-2 row-span-1 border'>알고리즘</div>
          <div className='col-span-6 row-span-1 border'>기술 스택</div>
        </div>
      </div>
    </section>
  );
};
