import React from 'react';
import { Avatar as RadixAvatar } from '@radix-ui/react-avatar';
import { cn } from '@/shared';

const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

const AvatarBackground = () => {
  return <div className={cn(imgSize, 'bg-yellow absolute top-5 left-5 hidden lg:block')} />;
};

export const Avatar = {
  ...RadixAvatar,
  Background: AvatarBackground,
};
