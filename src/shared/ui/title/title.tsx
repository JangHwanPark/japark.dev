import React, { ReactNode } from 'react';
import { cn } from '@/shared';

interface TitleProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeVariants = {
  sm: 'text-xl md:text-2xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
  xl: 'text-4xl md:text-5xl',
};

export const Title = ({ children, className, size = 'lg' }: TitleProps) => {
  return (
    <div className={cn(
      'flex flex-col break-words whitespace-pre-line leading-tight font-bold',
      sizeVariants[size],
      className
    )}>
      {children}
    </div>
  );
};
