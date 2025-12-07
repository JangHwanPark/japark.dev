import React from 'react';
import { Avatar, cn } from '@/shared';

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
    </section>
  );
};
