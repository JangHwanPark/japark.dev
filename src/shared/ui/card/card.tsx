import React, { ReactNode } from 'react';
import { cn } from '@/shared';

interface RootProps {
  children?: ReactNode;
  className?: string;
  noPadding?: boolean;
}

interface ContentProps {
  children?: ReactNode;
  className?: string;
}

const cardStyle = 'bg-bg-2 p-6 rounded-2xl glass relative overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:glass-hover hover:shadow-[var(--shadow-card-hover)]';

const Root = ({ children, className, noPadding = false }: RootProps) => {
  return (
    <article className={cn(cardStyle, noPadding && 'p-0', className)}>
      {children}
    </article>
  );
};

const Content = ({ children, className }: ContentProps) => {
  return (
    <div className={cn('flex flex-col justify-center h-full gap-6', className)}>
      {children}
    </div>
  );
};

export const Card = {
  Root,
  Content,
};
