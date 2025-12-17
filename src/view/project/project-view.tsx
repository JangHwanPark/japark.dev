import React from 'react';
import Link from "next/link";
import Image from "next/image";
import * as Tooltip from '@radix-ui/react-tooltip';

const projects = [
  {
    id: 1,
    title: "Testea",
    category: "QA Management Tool",
    desc: "기존 상용 툴의 높은 비용과 복잡성을 개선하기 위해 개발한 1인 및 소규모 팀 최적화 테스트 케이스 관리 솔루션입니다.",
    stack: ["Next.js", "Supabase", "Spring Boot"],
    src: "/images/testea_temp.png",
  },
  {
    id: 2,
    title: "D'edu",
    category: "EdTech Platform",
    desc: "노션, 카카오톡 등으로 파편화된 강사와 학생 간의 소통 및 수업 관리를 하나의 플랫폼으로 통합하여 교육 프로세스 효율을 높였습니다.",
    stack: ["Next.js", "Spring Boot", "MySQL", "AWS"],
    src: "/images/d_edu.png",
  },
  {
    id: 3,
    title: "Visionlife",
    category: "Interactive Corporate Web",
    desc: "기업 브랜딩 강화를 위한 홍보용 웹사이트입니다. GSAP를 활용한 동적인 스크롤 애니메이션과 인터랙션으로 브랜드 아이덴티티를 몰입감 있게 전달했습니다.",
    stack: ["React", "GSAP"],
    src: "/images/visionlife_temp.png",
  },
  {
    id: 4,
    title: "DA AUCP",
    category: "Web Order System",
    desc: "대학교 식당 키오스크의 긴 대기 시간(평균 30분) 문제를 해결하기 위해 구축한 웹 기반 원격 주문 및 결제 시스템입니다.",
    stack: ["Next.js", "MongoDB"],
    src: "/images/da_aucp.svg",
  },
];

export const ProjectView = () => {
  return (
    <Tooltip.Provider delayDuration={200} skipDelayDuration={500}>
      <section id="project-section" className="col-span-12 flex flex-col mb-24">
        <div className='grid grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(100px,_auto)]'>
          <header className='col-span-2 row-span-1 flex flex-col justify-end pb-4'>
            <p className='w-full text-3xl sm:text-4xl md:text-5xl font-heading font-bold drop-shadow-md mb-2'>
              Featured Projects
            </p>
            <p className='text-[var(--color-wt-primary-light)] text-sm md:text-base'>
              Explore our latest creative works and solutions.
            </p>
            <h2 className='sr-only'>Featured Projects</h2>
          </header>

          {projects.map((project) => (
            <Tooltip.Root key={project.id}>
              <Tooltip.Trigger asChild>
                <div
                  className='group cursor-none col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-[var(--color-dk-primary-soft)] min-h-[300px] shadow-lg transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(170,66,255,0.3)]'
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-data-[state=delayed-open]:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"/>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="z-50 select-none rounded-lg bg-[var(--color-dk-primary)] border border-[var(--color-dk-primary-soft)] px-5 py-4 shadow-[0_10px_38px_-10px_rgba(22,_23,_24,_0.8),_0_10px_20px_-15px_rgba(22,_23,_24,_0.8)] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade max-w-[300px]"
                  sideOffset={5}
                  side="right" // 기본적으로 오른쪽에 뜨게 설정 (화면 공간에 따라 자동 조정됨)
                >
                  <div className="flex flex-col gap-2">
                    {/* 카테고리 */}
                    <span className="text-xs font-bold tracking-wider uppercase">
                      {project.category}
                    </span>
                    {/* 제목 */}
                    <h3 className="text-lg font-bold text-[var(--color-wt-primary)] leading-tight">
                      {project.title}
                    </h3>
                    {/* 설명 */}
                    <p className="text-sm text-[var(--color-wt-primary-light)] leading-relaxed">
                      {project.desc}
                    </p>
                    {/* 스택 태그 */}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.stack.map((tech) => (
                        <span key={tech}
                              className="px-2 py-0.5 rounded-full bg-[var(--color-dk-primary-soft)] text-[10px] text-[var(--color-wt-primary-light)] border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Tooltip.Arrow className="fill-[var(--color-dk-primary)]"/>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}

          <div className='col-span-2 row-span-1 border  rounded-xl flex items-center justify-center transition-colors group cursor-pointer'>
            <Link href='#' className="text-xl font-bold flex items-center gap-3 transition-colors">
              All View
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>

        </div>
      </section>
    </Tooltip.Provider>
  );
};