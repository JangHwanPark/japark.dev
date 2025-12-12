import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { cn } from '@/shared';

export const TechView = () => {
  return (
    <section
      id="tech-section"
      aria-labelledby="tech-heading"
      className="col-span-12 lex mx-auto mb-32 w-full max-w-3xl flex-col justify-center gap-5 px-4 sm:px-8 md:max-w-4xl md:px-10 lg:mb-0 lg:max-w-4xl"
    >
      <header className="pt-20 pb-10 lg:pt-5">
        <h2 className="w-fit pb-3 text-2xl font-bold lg:pb-8 lg:text-4xl">
          주로 사용해요 or 사용해 봤어요
        </h2>
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
