// app/contact-us/page.tsx
import { HeroSection } from './HeroSection';
import { ContactCardsSection } from './ContactCardsSection';
import { ContactFormSection } from './ContactFormSection';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactCardsSection />
      <ContactFormSection />
    </div>
  );
}