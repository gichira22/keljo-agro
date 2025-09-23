import { HeroSection } from './components/sections/Hero';
import { StatsSection } from './components/sections/StatsSection';
import { ExecutiveMessage } from './components/sections/ExecutiveMessage';
import { WhoWeAre } from './components/sections/WhoWeAre';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ExecutiveMessage />
      <WhoWeAre />
      <WhyChooseUs />

    </div>
  );
}