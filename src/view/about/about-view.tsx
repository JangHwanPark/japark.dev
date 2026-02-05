'use client';
import React from 'react';
import { Avatar, Card, Tag, Title, cn } from '@/shared';

export const AboutView = () => {
  return (
    <section id="about-section" aria-labelledby="about-heading" className="col-span-12 h-full flex flex-col">
      <h2 id="about-heading" className="sr-only">About</h2>
      <div className="grid grid-cols-6 gap-4 w-full h-full min-h-[var(--height-hero)] md:min-h-[var(--height-hero-md)] lg:min-h-[var(--height-hero-lg)]">
        <Card.Root className="col-span-4 row-span-3">
          <Card.Content>
            <Tag>사용자 중심 사고</Tag>
            <Title>
              <span>협업을 통해 더 나은 코드를 만들고</span>
              <span>일상의 문제를 소프트웨어로 풀어냅니다</span>
            </Title>
          </Card.Content>
        </Card.Root>
        <Card.Root className="col-span-2 row-span-3 overflow-hidden group" noPadding>
          <Avatar.Root className="aspect-square rounded-2xl h-full">
            <Avatar.Image
              src="/images/profile.webp"
              alt="프로필 이미지"
              className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <Avatar.Fallback className="text-text-3">JangHwan Park</Avatar.Fallback>
          </Avatar.Root>
        </Card.Root>
      </div>
    </section>
  );
};
