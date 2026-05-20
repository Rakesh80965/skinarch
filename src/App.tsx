import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { WhySkinArch } from './components/WhySkinArch';
import { Doctors } from './components/Doctors';
import { Results } from './components/Results';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { Booking } from './components/Booking';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <AnnouncementBar />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Treatments />
        <WhySkinArch />
        <Doctors />
        <Results />
        <Process />
        <Faq />
        <Booking />
        <Visit />
      </main>

      <Footer />
      <FloatingCta />
    </>
  );
}
