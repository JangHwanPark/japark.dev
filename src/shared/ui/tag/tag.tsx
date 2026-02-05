import React, { ReactNode } from 'react';
import { cn } from '@/shared';

interface TagProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const colorVariants = {
  primary: 'bg-primary',
  secondary: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
};

export const Tag = ({ children, className, color = 'primary' }: TagProps) => {
  return (
    <div className={cn('flex items-center gap-2 text-xs text-text-3', className)}>
      <span className={cn('w-2 h-2 rounded-full', colorVariants[color])}></span>
      <span>{children}</span>
    </div>
  );
};
