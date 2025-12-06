import React from 'react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <h1 className="text-md xs:text-lg dark:hover:text-h-yellow font-bold md:text-xl">
      <Link href="/">japark.dev</Link>
    </h1>
  );
};
