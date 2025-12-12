import React from 'react';

<<<<<<<< HEAD:src/app/test/page.tsx
const imgSize =
  'rounded-full lg:rounded-lg w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px] lg:h-[410px] xl:h-[450px]';

const Page = () => {
  return (
    <div>
      {/* Avatar */}
      <Avatar.Root className={cn(imgSize, 'relative lg:-top-2')}>
        <Avatar.Background />
        <Avatar.Image
          src="/images/profile.webp"
          alt="프로필 이미지"
          className={cn(imgSize, 'relative z-10 object-cover')}
        />
        <Avatar.Fallback>JangHwan Park</Avatar.Fallback>
      </Avatar.Root>
      {/* Line */}
      <Line.Linear />
      <Line.Root>
        <Line.CurveFirst className="h-52 lg:ml-38 lg:w-8/12 xl:ml-112 xl:w-6/12" />
        <Line.CurveLast className="h-72 w-4/12 lg:ml-38 xl:ml-112" />
      </Line.Root>
      <Line.Root className="mt-12">
        <Line.CurveFirst className="ml-56 h-52 w-6/12 border-b-2 pl-4" />
        <Line.CurveLast className="ml-56 h-72 w-full" />
      </Line.Root>
    </div>
========
/*interface OriginProps {

};*/

export const Origin = () => {
  return (
    <section id="origin-section" aria-labelledby="origin-heading">
      <div>
        <div>
          <header>
            <h2 id="origin-heading">
              안녕하세요. 데이터를 조각하는 프론트엔드 개발자 박장환입니다.
            </h2>
            <p>데이터를 조각하여 경험을 만들고, 경험을 연결하여 가치를 만듭니다.</p>
          </header>
          <div>
            <p>제 홈페이지에 방문해 주셔서 감사합니다.</p>
            <p>
              저는 데이터를 시각화하고, 더 나은 UI를 설계하며 사용자 입장에서 경험을 고민하는
              프론트엔드 개발자입니다.
            </p>
            <p>
              이 포트폴리오에는 제가 고민해 온 방식, 배우고 실험해 온 흔적들, 그리고 더 좋은 방향을
              향한 저의 과정이 담겨 있습니다.
            </p>
          </div>
        </div>
        {/* Avatar 컴포넌트 배치될 예정 */}
      </div>
    </section>
>>>>>>>> dd5e492 (feat: 테스트 페이지 추가 및 Origin 뷰 문구 수정):src/view/origin/origin.tsx
  );
};

export default Page;
