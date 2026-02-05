import React from 'react';
import { Logo } from '@/shared';
import { GlobalNavbar } from '@/widgets/layout/global-navbar/global-navbar';

// sticky top-0 z-100 py-4 shadow-md backdrop-blur-md backdrop-filter backdrop-saturate-150

export const Header = () => {
  return (
    <header className="col-span-12 h-[var(--height-header)] md:h-[var(--height-header-md)] lg:h-[var(--height-header-lg)] bg-bg-2 rounded-xl">
      <div className="h-full px-4 sm:px-6 flex items-center justify-between">
        <Logo />
        <GlobalNavbar />
      </div>
    </header>
  );
};
