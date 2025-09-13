import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { LegalAndResults } from '@/components/sections/LegalAndResults';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { FAQStructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FAQStructuredData />
      <Hero />
      <HowItWorks />
      <ValueProposition />
      <LegalAndResults />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
