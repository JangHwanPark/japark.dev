import {MilestonesView, OriginView, PlaygroundView, TechView} from '@/view';

export default function Home() {
  return (
    <main className="grid grid-cols-12 mx-auto max-w-screen-xl gap-x-6 gap-y-16 px-4 sm:px-8">
      <OriginView/>
      <TechView/>
      <PlaygroundView/>
      <MilestonesView/>
    </main>
  );
}
