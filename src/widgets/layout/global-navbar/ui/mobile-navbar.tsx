'use client';
import React from 'react';
import { cn, NavMenu } from '@/shared';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';

interface MobileNavbarProps {
  items: readonly NavMenu[];
}

export const MobileNavbar = ({ items }: MobileNavbarProps) => {
  const handleMenuOpen = () => {
    console.log('테스트중');
  };
  const isOpen = false;

  return (
    <>
      <button className="flex items-center lg:hidden" onClick={handleMenuOpen}>
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/90 text-white"
          onClick={handleMenuOpen}
        >
          <div
            className="relative flex h-screen w-64 flex-col items-center justify-center rounded-lg p-6 shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-2xl"
              onClick={handleMenuOpen}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <ul className="flex flex-col gap-10">
              {items.map(item => (
                <li
                  key={item.title}
                  className={cn('md:font-base p-0 text-center text-2xl font-semibold')}
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
          </div>
        </div>
      )}
    </>
  );
};
