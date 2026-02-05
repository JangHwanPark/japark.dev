'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/shared';
import { IconType } from 'react-icons';

interface RootProps {
  children: ReactNode;
  className?: string;
}

interface ItemProps {
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps {
  href: string;
  icon?: IconType;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Root = ({ children, className }: RootProps) => {
  return (
    <section className={cn('col-span-12 grid grid-cols-4 gap-4', className)}>
      {children}
    </section>
  );
};

const Item = ({ children, className }: ItemProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};

const linkBaseStyle = 'w-full h-[var(--height-header)] md:h-[var(--height-header-md)] lg:h-[var(--height-header-lg)] flex items-center justify-center gap-2 rounded-2xl text-2xl font-semibold hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg';

const linkVariants = {
  primary: 'bg-primary text-white hover:bg-primary-600',
  secondary: 'bg-bg-2 text-text-1 hover:bg-bg-3',
};

const LinkButton = ({ href, icon: Icon, children, className, variant = 'secondary' }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkBaseStyle, linkVariants[variant], className)}
    >
      {Icon && <Icon className="text-xl" />}
      <span>{children}</span>
    </Link>
  );
};

export const SocialLinks = {
  Root,
  Item,
  Link: LinkButton,
};
