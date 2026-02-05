'use client';
import React, {useRef} from 'react';
import {Avatar, cn} from '@/shared';
import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const LEARNING = ['Iteration Pattern', 'CodeTree Trail 3'];
const ALGORITHM = ['BOJ', 'LeetCode'];

const card = 'bg-bg-2 p-6 rounded-2xl glass relative overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 will-change-transform' +
  ' hover:-translate-y-1 hover:glass-hover hover:shadow-[var(--shadow-card-hover)]';

export const AboutView = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="about-section" aria-labelledby="about-heading" className='col-span-12 h-full flex flex-col'>
      <h2 id="about-heading" className="sr-only">About</h2>
      <div className='grid grid-cols-6 gap-4 w-full h-full min-h-[var(--height-hero)] md:min-h-[var(--height-hero-md)] lg:min-h-[var(--height-hero-lg)]'>
        <article className={cn(card, 'col-span-4 row-span-3')}>
          <div className='flex flex-col justify-center h-full gap-6'>
            <div className='flex items-center gap-2 text-xs text-text-3'>
              <span className='w-2 h-2 rounded-full bg-primary'></span>
              <span>사용자 중심 사고</span>
            </div>
            <div className='flex flex-col text-3xl md:text-4xl break-words whitespace-pre-line leading-tight font-bold'>
              <span>
                협업을 통해 더 나은 코드를 만들고
              </span>
              <span>
                일상의 문제를 소프트웨어로 풀어냅니다
              </span>
            </div>

          </div>
        </article>
        <article className={cn(card, 'p-0 col-span-2 row-span-3 overflow-hidden group')}>
          <Avatar.Root className='aspect-square rounded-2xl '>
            <Avatar.Image
              src="/images/profile.webp"
              alt="프로필 이미지"
              className='rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
            />
            <Avatar.Fallback className='text-text-3'>JangHwan Park</Avatar.Fallback>
          </Avatar.Root>
        </article>
      </div>
    </section>
  );
};