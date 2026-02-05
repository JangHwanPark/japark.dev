'use client';
import React, {useRef} from 'react';
import {Avatar, cn} from '@/shared';
import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const LEARNING = ['Iteration Pattern', 'CodeTree Trail 3'];
const ALGORITHM = ['BOJ', 'LeetCode'];

const card = 'bg-bg-2 p-6 rounded-3xl glass relative overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 will-change-transform' +
  ' hover:-translate-y-1 hover:glass-hover hover:shadow-[var(--shadow-card-hover)]';

export const AboutView = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="about-section" aria-labelledby="about-heading" className='col-span-12 flex flex-col'>
      <h2 id="about-heading" className="sr-only">About</h2>
      <div className='grid grid-cols-6 gap-4 max-w-5xl'>
        <article className={cn(card, 'col-span-4 row-span-2')}>
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
        <article className={cn(card, 'col-span-2 row-span-1 flex flex-col')}>
          <div className='flex flex-col gap-3 h-full justify-between'>
            <div>
              <h3 className='font-bold text-xl mb-3 text-text-1'>백그라운드</h3>
              <p className='text-base text-text-1 font-semibold mb-1'>Game Play QA</p>
            </div>
          </div>
        </article>
        <article className={cn(card, 'p-0 col-span-2 row-span-2 overflow-hidden group h-96')}>
          <Avatar.Root className='aspect-square rounded-3xl '>
            <Avatar.Image
              src="/images/profile.webp"
              alt="프로필 이미지"
              className='rounded-3xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
            />
            <Avatar.Fallback className='text-text-3'>JangHwan Park</Avatar.Fallback>
          </Avatar.Root>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='flex flex-col gap-3 h-full justify-center'>
            <div>
              <h3 className='font-bold text-xl mb-3 text-text-1'>현재 관심사</h3>
              <div className='flex justify-center flex-wrap gap-2'>
                {LEARNING.map((item) => (
                  <span
                    key={item}
                    className='px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium
                      hover:bg-primary-200 transition-colors duration-200'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-2')}>
          <div className='flex flex-col gap-3 h-full justify-center'>
            <h3 className='font-bold text-xl mb-3 text-text-1'>문제 해결</h3>
            <div className="overflow-hidden h-[40px] rounded-full bg-accent-100">
              <div className="vertical-loop-track animate-[var(--animate-vertical-step)]">
                {[...ALGORITHM, ...ALGORITHM].map((item, idx) => (
                  <span
                    key={`${item}-${idx}`}
                    className="h-[40px] flex items-center px-3  text-accent-700 text-sm font-medium"
                  >{item}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='h-full flex items-center justify-center gap-8'>
            <Link
              href='#'
              className='transition-all duration-300 hover:scale-110 text-text-2 hover:text-primary-600'
              aria-label='GitHub 프로필'
            >
              <FaGithub className='w-12 h-12'/>
            </Link>
            <Link
              href='#'
              className='transition-all duration-300 hover:scale-110 text-text-2 hover:text-primary-600'
              aria-label='LinkedIn 프로필'
            >
              <FaLinkedin className='w-12 h-12'/>
            </Link>
          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='h-full flex items-center justify-center gap-8'>
            <Link
              href='#'
              className='transition-all duration-300 hover:scale-110 text-text-2 hover:text-primary-600'
              aria-label='GitHub 프로필'
            >
              <FaGithub className='w-12 h-12'/>
            </Link>
            <Link
              href='#'
              className='transition-all duration-300 hover:scale-110 text-text-2 hover:text-primary-600'
              aria-label='LinkedIn 프로필'
            >
              <FaLinkedin className='w-12 h-12'/>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};