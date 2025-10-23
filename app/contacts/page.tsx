// app/contact-us/page.tsx
import { HeroSection } from './sections/HeroSection';
import { ContactCardsSection } from './sections/ContactCardsSection';
import { ContactFormSection } from './sections/ContactFormSection';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactCardsSection />
      <ContactFormSection />
    </div>
  );
}