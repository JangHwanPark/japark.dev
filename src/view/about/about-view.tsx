'use client';
import React, {useRef} from 'react';
import {Avatar, cn} from '@/shared';
import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const LEANING = ['Iteration Pattern', 'CodeTree Trail 3'];
const ALGORITHM = ['BOJ', 'LeetCode', 'Programmers', 'CodeTree'];

const card = 'p-6 rounded-3xl bg-bg-2/40 backdrop-blur-md relative overflow-hidden shadow-md transition will-change-transform' +
  ' hover:-translate-y-0.5 hover:border-bg-3 hover:bg-bg-2/55 hover:shadow-2 border';

export const AboutView = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="about-section" aria-labelledby="origin-heading" className='col-span-12 flex flex-col'>
      <h2 id="about-heading" className="sr-only">About</h2>
      <div className='grid grid-cols-6 gap-4 max-w-5xl'>
        <article className={cn(card, 'col-span-4 row-span-2 border')}>
          <div className='flex flex-col justify-center h-full'>
            <div className='flex flex-col text-3xl md:text-4xl break-words whitespace-pre-line leading-tight cursor-default'>
              <span>데이터를 조각하여 경험을 만들고</span>
              <span>경험을 연결하여 가치를 만듭니다.</span>
            </div>
            <p className='text-lg mt-4 max-w-2xl'>단순한 기능 구현을 넘어, 사용자가 머무르고 싶은 UI를 만듭니다. 데이터와 사람을 연결하는 과정에 즐거움을 느끼는 프론트엔드 개발자입니다.</p>
          </div>
        </article>
        <article className={cn(card, 'col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1 flex flex-col')}>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-2xl'>백그라운드</h3>
            <p>Game Play QA</p>
          </div>
        </article>
        <article className={cn(card, 'p-0 col-span-2 row-span-2')}>
          <Avatar.Root className='aspect-square rounded-2xl'>
            <Avatar.Image
              src="/images/profile.webp"
              alt="프로필 이미지"
              className='rounded-2xl object-cover w-96 h-96'
            />
            <Avatar.Fallback>JangHwan Park</Avatar.Fallback>
          </Avatar.Root>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1 ')}>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-2xl'>현재 관심사</h3>
            <p>Iteration Pattern</p>
          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-2')}>
          <h3>대표 프로젝트</h3>
          <Avatar.Root className='rounded-2xl'>
            <Avatar.Image
              src="/images/testea_temp.png"
              alt="대표 프로젝트"
              className='rounded-2xl object-cover'
            />
            <Avatar.Fallback>testea</Avatar.Fallback>
          </Avatar.Root>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-2xl'>문제 해결</h3>
            <p>LeetCode</p>
          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='h-full flex items-center gap-6'>
            <div>
              <Link href='#'>
                <FaGithub className='w-12 h-12'/>
              </Link>
            </div>
            <div>
              <Link href='#'>
                <FaLinkedin className='w-12 h-12'/>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
