import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { cn } from '@/shared';

// TODO: props 로 받도록 수정해야함
const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

const AvatarBackground = () => {
  return <div className={cn(imgSize, 'bg-yellow absolute top-5 left-5 hidden lg:block')} />;
};

export const Avatar = {
  Root: RadixAvatar.Root,
  Image: RadixAvatar.Image,
  Fallback: RadixAvatar.Fallback,
  Background: AvatarBackground,
};
