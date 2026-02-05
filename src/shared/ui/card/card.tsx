import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children} : CardProps) => {
  return (
    <div className='bg-bg-2 p-6 rounded-3xl glass relative overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:glass-hover hover:shadow-[var(--shadow-card-hover)]'>
      {children}
    </div>
  );
};