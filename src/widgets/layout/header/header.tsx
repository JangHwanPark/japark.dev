import React from 'react';
import { Logo } from '@/shared';
import { GlobalNavbar } from '@/widgets/layout/global-navbar/global-navbar';

export const Header = () => {
  return (
    <header className="col-span-12 w-full pb-5">
      <div className="xs:px-3 flex items-center justify-between pt-5 sm:px-10 xl:px-20">
        <Logo />
        <GlobalNavbar />
      </div>
    </header>
  );
};
