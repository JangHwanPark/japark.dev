import React from 'react';

export const Footer = () => {
  return (
    <footer className="col-span-12 h-[var(--height-footer)] md:h-[var(--height-footer-md)] lg:h-[var(--height-footer-lg)] w-full bg-bg-2 rounded-2xl flex items-center justify-center">
      <p className="text-center text-xl md:text-2xl">
        © 2025 <span className="font-bold">JangHwanPark.</span> All Rights Reserved.
      </p>
    </footer>
  );
};
