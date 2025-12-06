import React from 'react';
import { NAV_MENU } from '@/shared';
import { DesktopNavbar, MobileNavbar } from '@/widgets/layout/global-navbar/ui';

export const GlobalNavbar = () => {
  return (
    <nav id="gnb" className="w-fit max-w-xs lg:w-full lg:max-w-md xl:max-w-xl">
      <DesktopNavbar items={NAV_MENU} />
      <MobileNavbar items={NAV_MENU} />
    </nav>
  );
};
