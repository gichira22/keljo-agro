import { HeroSection } from './components/sections/Hero';
import { StatsSection } from './components/sections/StatsSection';
import { ExecutiveMessage } from './components/sections/ExecutiveMessage';
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ExecutiveMessage />

    </div>
  );
}