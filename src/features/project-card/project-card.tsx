import React from 'react';

export const ProjectCard = () => {
  return (
    <div className="flex w-[350px] flex-col items-center justify-start gap-6 border-r p-6 lg:w-[500px]">
      <div className="w-full">
        <header className="my-10 flex w-full items-center justify-between">
          <h3 className="text-3xl font-semibold">01.</h3>
          <div className="text-end">
            <h4 className="text-xl font-semibold">프로젝트 이름</h4>
            <p>웹 애플리케이션</p>
          </div>
        </header>
        <div className="mb-10">
          <h4 className="mb-2 text-xl font-semibold">Tools and features</h4>
          <ul className="flex flex-wrap gap-3">
            <li>기술스택 이름</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
