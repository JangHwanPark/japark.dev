'use client';
import React from 'react';
import { NavMenu } from '@/shared';
import Link from 'next/link';
import { cn } from '@/shared';

interface DesktopNavbarProps {
  items: readonly NavMenu[];
}

export const DesktopNavbar = ({ items }: DesktopNavbarProps) => {
  return (
    <ul className="hidden flex-row justify-between gap-3 lg:flex xl:gap-5">
      {items.map(item => (
        <li
          key={item.title}
          className={cn('md:font-base p-0 text-center text-5xl font-semibold md:text-lg')}
        >
          <Link
            href={item.href}
            // onClick={onClick}
            /*className={({isActive}) =>
              clsx(
                'relative flex h-full w-full items-center justify-center pb-1',
                'after:bg-c-yellow after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:content-[""]',
                'after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-120',
                isActive && 'active font-semibold after:scale-x-120'
              )
            }*/
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
