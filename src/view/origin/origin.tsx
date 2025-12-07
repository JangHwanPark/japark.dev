import React from 'react';
import { Avatar, cn, Line } from '@/shared';

/*interface OriginProps {

};*/

const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

export const Origin = () => {
  return (
    <section id="origin-section">
      {/* Avatar */}
      <Avatar.Root className={cn(imgSize, 'relative lg:-top-2')}>
        <Avatar.Background />
        <Avatar.Image
          src="/images/profile.webp"
          alt="프로필 이미지"
          className={cn(imgSize, 'relative z-10 object-cover')}
        />
        <Avatar.Fallback>JangHwan Park</Avatar.Fallback>
      </Avatar.Root>
      {/* Line */}
      <Line.Linear />
      <Line.Root>
        <Line.CurveFirst className="h-52 lg:ml-38 lg:w-8/12 xl:ml-112 xl:w-6/12" />
        <Line.CurveLast className="h-72 w-4/12 lg:ml-38 xl:ml-112" />
      </Line.Root>
      <Line.Root className="mt-12">
        <Line.CurveFirst className="ml-56 h-52 w-6/12 border-b-2 pl-4" />
        <Line.CurveLast className="ml-56 h-72 w-full" />
      </Line.Root>
    </section>
  );
};
