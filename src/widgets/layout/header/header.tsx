import React from 'react';
import { Logo } from '@/shared';
import { GlobalNavbar } from '@/widgets/layout/global-navbar/global-navbar';

export const Header = () => {
  return (
    <header className="sticky top-0 z-100 py-4 shadow-md backdrop-blur-md backdrop-filter backdrop-saturate-150">
      <div className="px-4 sm:px-8 max-w-5xl mx-auto flex items-center justify-between">
        <Logo />
        <GlobalNavbar />
      </div>
    </header>
  );
};
