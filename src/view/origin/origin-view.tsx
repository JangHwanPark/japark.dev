import React from 'react';
import { Avatar, cn, Line } from '@/shared';

const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

export const OriginView = () => {
  return (
    <>
      <Line.Linear />
      <section id="origin-section" aria-labelledby="origin-heading">
        <div className="mt-24 flex w-full flex-col-reverse items-center justify-center gap-10 px-4 py-16 sm:px-8 lg:mt-0 lg:mb-10 lg:min-h-[500px] lg:flex-row lg:gap-5 lg:py-0 xl:mb-0 xl:gap-10">
          <div className="relative flex flex-col items-center justify-center md:gap-5 lg:gap-2">
            <header className="flex flex-col gap-1 lg:gap-2">
              <h2
                id="origin-heading"
                className="text-t-primary text-xl font-bold sm:text-2xl md:text-3xl lg:leading-tight"
              >
                안녕하세요. 데이터를 조각하는 프론트엔드 개발자 박장환입니다.
              </h2>
              <p className="text-t-sub text-wt-primary-light mt-4 text-lg font-medium sm:text-xl md:text-3xl xl:text-5xl">
                <span className="block md:inline">데이터를 조각하여 경험을 만들고, </span>
                <span className="block md:inline">경험을 연결하여 가치를 만듭니다.</span>
              </p>
            </header>
            <div className="text-t-sub mt-6 max-w-lg text-base leading-7 lg:mt-0 xl:max-w-2xl">
              <p className="mb-4 font-semibold">제 홈페이지에 방문해 주셔서 감사합니다.</p>
              <p className="xs:text-sm text-t-sub text-wt-primary-light leading-7 font-normal break-keep sm:text-base md:relative md:z-20 lg:text-lg xl:text-xl">
                저는 데이터를 시각화하고, 더 나은 UI를 설계하며 사용자 입장에서 경험을 고민하는
                프론트엔드 개발자입니다. 이 포트폴리오에는 제가 고민해 온 방식과 성장의 흔적들이
                담겨 있습니다.
              </p>
            </div>
          </div>
          {/* Avatar 컴포넌트 배치될 예정 */}
          <Avatar.Root className={cn(imgSize, 'relative lg:-top-2')}>
            <Avatar.Background />
            <Avatar.Image
              src="/images/profile.webp"
              alt="프로필 이미지"
              className={cn(imgSize, 'relative z-10 object-cover')}
            />
            <Avatar.Fallback>JangHwan Park</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </section>
      <Line.Root className="relative w-full lg:block">
        <Line.CurveFirst className="h-52 lg:ml-38 lg:w-8/12 xl:ml-112 xl:w-6/12" />
        <Line.CurveLast className="h-72 w-4/12 lg:ml-38 xl:ml-112" />
      </Line.Root>
    </>
  );
};
