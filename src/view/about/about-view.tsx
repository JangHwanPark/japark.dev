'use client';
import React, {useRef} from 'react';
import {Avatar, cn} from '@/shared';
import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const LEARNING = ['Iteration Pattern'];
const ALGORITHM = ['BOJ', 'LeetCode', 'Programmers', 'CodeTree Trail 3'];

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
                데이터를 조각하여 경험을 만들고
              </span>
              <span>
                경험을 연결하여 가치를 만듭니다.
              </span>
            </div>
            <div className='flex flex-col gap-4 text-base md:text-lg leading-relaxed text-text-2'>
              <p className='max-w-2xl'>
                단순한 기능 구현을 넘어, <span className='font-semibold text-text-1'>사용자가 머무르고 싶은 UI</span>를 만듭니다.
                데이터와 사람을 연결하는 과정에 즐거움을 느끼는 프론트엔드 개발자입니다.
                게임 QA 경험을 통해 <span className='font-semibold text-text-1'>사용자 관점의 디테일</span>을 체득했으며,
                복잡한 데이터를 직관적인 인터페이스로 풀어내는 것을 좋아합니다.
              </p>
              <p className='max-w-2xl'>
                비즈니스 속도에 맞춰 <span className='font-semibold text-text-1'>빠르게 실행하고 점진적으로 개선</span>하는 방식을 선호하고,
                확장 가능한 기반 위에서 지속적으로 발전하는 코드를 지향합니다.
              </p>
              <p className='max-w-2xl'>
                <span className='font-semibold text-text-1'>지식을 공유하고 함께 성장하는 문화</span>를 중요하게 생각합니다.
                제가 이해한 내용을 문서와 예제로 정리해 팀이 더 빠르게 합의하고, 더 적게 헤매도록 돕는 과정에서 큰 즐거움을 느낍니다.
              </p>
            </div>

          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1 flex flex-col')}>
          <div className='flex flex-col gap-3 h-full justify-between'>
            <div>
              <h3 className='font-bold text-2xl mb-3 text-text-1'>백그라운드</h3>
              <p className='text-base text-text-1 font-semibold mb-1'>Game Play QA</p>
            </div>
          </div>
        </article>
        <article className={cn(card, 'p-0 col-span-2 row-span-2 overflow-hidden group')}>
          <Avatar.Root className='aspect-square rounded-3xl'>
            <Avatar.Image
              src="/images/profile.webp"
              alt="프로필 이미지"
              className='rounded-3xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
            />
            <Avatar.Fallback className='text-text-3'>JangHwan Park</Avatar.Fallback>
          </Avatar.Root>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='flex flex-col gap-3 h-full justify-between'>
            <div>
              <h3 className='font-bold text-2xl mb-3 text-text-1'>현재 관심사</h3>
              <div className='flex flex-wrap gap-2'>
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
          <div className='flex flex-col gap-4 h-full'>
            <div>
              <h3 className='font-bold text-2xl text-text-1 mb-2'>개발 접근법</h3>
              <p className='text-sm text-text-3'>Development Philosophy</p>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-6'>
              <div className='space-y-3'>
                <p className='text-base font-semibold text-text-1 leading-relaxed'>
                  실험을 통해 성장하고
                  <br/>
                  필요한 만큼만 적용합니다
                </p>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-3 group/item'>
                  <div className='w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center
                    group-hover/item:bg-primary-200 transition-colors duration-200'>
                    <span className='text-sm font-bold text-primary-700'>1</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-text-2'>자유로운 실험</p>
                    <p className='text-xs text-text-3'>안전한 환경에서 도전</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 group/item'>
                  <div className='w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center
                    group-hover/item:bg-accent-200 transition-colors duration-200'>
                    <span className='text-sm font-bold text-accent-700'>2</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-text-2'>선택적 적용</p>
                    <p className='text-xs text-text-3'>프레임워크보다 본질</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 group/item'>
                  <div className='w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center
                    group-hover/item:bg-primary-200 transition-colors duration-200'>
                    <span className='text-sm font-bold text-primary-700'>3</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-text-2'>점진적 개선</p>
                    <p className='text-xs text-text-3'>완벽보다 지속 가능성</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 pt-2 border-t border-bg-3'>
              <span className='text-xs text-text-3 px-2 py-1 bg-bg-2 rounded-md'>아키텍처 실험</span>
              <span className='text-xs text-text-3 px-2 py-1 bg-bg-2 rounded-md'>도메인 중심</span>
            </div>
          </div>
        </article>
        <article className={cn(card, 'col-span-2 row-span-1')}>
          <div className='flex flex-col gap-3 h-full justify-between'>
            <div>
              <h3 className='font-bold text-2xl mb-3 text-text-1'>문제 해결</h3>
              <div className='flex flex-wrap gap-2'>
                {ALGORITHM.slice(0, 2).map((item) => (
                  <span
                    key={item}
                    className='px-3 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium
                      hover:bg-accent-200 transition-colors duration-200'
                  >
                    {item}
                  </span>
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
      </div>
    </section>
  );
};