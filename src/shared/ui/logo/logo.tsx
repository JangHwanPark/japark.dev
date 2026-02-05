import React from 'react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <h1 className="text-3xl font-bold">
      <Link href="/">japark.dev</Link>
    </h1>
  );
};
