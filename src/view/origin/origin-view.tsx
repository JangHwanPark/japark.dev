'use client';
import React, {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Avatar, cn} from '@/shared';

gsap.registerPlugin(ScrollTrigger);

const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

export const OriginView = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.title-line',
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
      }
    );

    tl.fromTo(
      '.desc-line',
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
      },
      '-=0.5'
    );

    tl.fromTo(
      '#origin-avatar',
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        duration: 1.2,
        x: 0,
      },
      '-=0.5'
    );
  }, []);

  return (
    <section ref={sectionRef} id="origin-section" aria-labelledby="origin-heading" className='col-span-12'>
      <div
        className="mt-24 w-full grid grid-cols-12 items-center justify-center gap-10 px-4 py-16 sm:px-8 lg:mt-0 lg:mb-10 lg:min-h-[500px] lg:flex-row lg:gap-5 lg:py-0 xl:mb-0 xl:gap-10">
        <div className="relative col-span-7 flex flex-col md:gap-5 lg:gap-10">
          <header className="flex flex-col gap-1 lg:gap-2">
            <h2
              id="origin-heading"
              className="flex flex-col gap-2 text-t-primary text-xl font-bold sm:text-2xl md:text-3xl lg:leading-tight"
            >
              <span className="title-line block">데이터를 조각하는</span>
              <span className="title-line block">프론트엔드 개발자 박장환입니다.</span>
            </h2>
            <p className="flex flex-col gap-2 text-t-sub text-wt-primary-light mt-4 text-lg font-medium sm:text-xl md:text-3xl xl:text-4xl">
              <span className="title-line block">데이터를 조각하여 경험을 만들고,</span>
              <span className="title-line block">경험을 연결하여 가치를 만듭니다.</span>
            </p>
          </header>
          <div className="text-t-sub mt-6 max-w-lg text-base leading-7 lg:mt-0 xl:max-w-2xl">
            <p className="desc-line xs:text-sm text-t-sub text-wt-primary-light leading-8 font-normal break-keep sm:text-base md:relative md:z-20 lg:text-lg xl:text-xl">
              데이터를 시각화하고, 더 나은 UI를 설계하며 사용자 입장에서 경험을 고민하는
              프론트엔드 개발자입니다. 이 포트폴리오에는 제가 고민해 온 방식과 성장의 흔적들이
              담겨 있습니다.
            </p>
          </div>
        </div>
        <Avatar.Root className={cn(imgSize, 'col-span-5 relative lg:-top-2')}>
          <Avatar.Background/>
          <Avatar.Image
            id='origin-avatar'
            src="/images/profile.webp"
            alt="프로필 이미지"
            className={cn(imgSize, 'relative z-10 object-cover')}
          />
          <Avatar.Fallback>JangHwan Park</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </section>
  );
};