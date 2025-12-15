import React from 'react';

export const TechStackView = () => {
  return (
    <section id='tech-stack-view'>
      <p>TechStackView</p>
      <h2 className='sr-only'>TechStackView</h2>
      <div className='grid grid-cols-4 grid-rows-3 gap-3'>
        <div className='col-span-4'>상단 메뉴</div>
        <aside className='col-span-1 row-span-2'>1</aside>
        <div className='col-span-3'>2</div>
        <div className='col-span-3'>설명</div>
      </div>
    </section>
  );
};