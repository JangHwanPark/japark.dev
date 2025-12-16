import React from 'react';
import Link from "next/link";

export const ProjectView = () => {
  return (
    <section id="project-section" className="col-span-12 flex h-[100vh] flex-col items-start justify-start">
      <div className='grid grid-cols-4 grid-rows-5 gap-10'>
        <header className='col-span-2 rows-span-1 border'>
          <p>Featured Projects</p>
          <h2 className='sr-only'>Featured Projects</h2>
        </header>
        <div className='col-span-2 row-span-2 border'>프로젝트 1</div>
        <div className='col-span-2 row-span-2 border'>프로젝트 2</div>
        <div className='col-span-2 row-span-2 border'>프로젝트 3</div>
        <div className='col-span-2 row-span-2 border'>프로젝트 4</div>
        <div className='col-span-2 row-span-1 border'>
          <Link href='#'>All view</Link>
        </div>
      </div>
    </section>
  );
};
