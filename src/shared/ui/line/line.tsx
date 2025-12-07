import React from 'react';
import { cn } from '@/shared';

// ------------------------------------
// Types
// ------------------------------------
type LineProps = React.HTMLAttributes<HTMLDivElement>;
// interface LineProps extends React.HTMLAttributes<HTMLDivElement>{}

// ------------------------------------
// Styles
// ------------------------------------
const lineStyle = 'text-yellow hidden w-full lg:block pointer-events-none';

// linear lg:h-44 xl:h-96

// ------------------------------------
// Component
// ------------------------------------
const LineRoot = ({ className, children }: LineProps) => {
  return (
    <div role="presentation" className={cn(lineStyle, className)} aria-hidden={true}>
      {children}
    </div>
  );
};

const LineCurveFirst = ({ className }: LineProps) => {
  return (
    <div
      role="presentation"
      className={cn(className, 'h-1/2 border-r-2 border-b-2')}
      aria-hidden={true}
    />
  );
};

const LineCurveLast = ({ className }: LineProps) => {
  return (
    <div role="presentation" className={cn(className, 'h-1/2 border-l-2')} aria-hidden={true} />
  );
};

const LineLinear = ({ className }: LineProps) => {
  return (
    <LineRoot className="lg:h-44 xl:h-96">
      <div
        role="presentation"
        className={cn(className, 'h-full w-8/12 border-r-2 lg:ml-5 lg:w-9/12')}
        aria-hidden={true}
      />
    </LineRoot>
  );
};

export const Line = {
  Root: LineRoot,
  CurveFirst: LineCurveFirst,
  CurveLast: LineCurveLast,
  Linear: LineLinear,
};
