import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { cn } from '@/shared';

export const TechView = () => {
  return (
    <section
      id="tech-section"
      aria-labelledby="tech-heading"
      className="col-span-12 lex mx-auto mb-32 w-full max-w-3xl flex-col justify-center gap-5 md:max-w-4xl lg:mb-0 lg:max-w-4xl"
    >
      <header className="pt-20 pb-10 lg:pt-5">
        <h2 className="xs:text-left mt-32 mb-12 bg-gradient-to-b from-[#F4B400] to-white bg-clip-text text-4xl leading-10 font-bold text-transparent lg:mb-24 lg:text-6xl lg:leading-14 xl:leading-[70px] 2xl:text-7xl">Tech Stack</h2>
        <p className={cn('text-t-sub xs:text-sm leading-8 sm:text-base lg:text-lg xl:text-xl')}>
          기술은 문제를 해결하고 경험을 개선하기 위한 도구라고 생각합니다. 데이터를 이해하고, 흐름을
          설계하며, 사용자가 머무는 시간을 더 편하게 만드는 기술을 탐구합니다.
        </p>
      </header>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="core">주로 사용해요</Tabs.Trigger>
          <Tabs.Trigger value="used">사용해 봤어요</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="core">
          <p>Value: core - 주로 사용해요</p>
        </Tabs.Content>
        <Tabs.Content value="used">
          <p>Value: used - 사용해 봤어요</p>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
};
