import { Button, Highlight } from '@components/Button';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import { HeroImage } from '@components/HeroImage';
import { ChevronIcon } from '@components/icons/chevron';

export const HomepageHero = () => (
  <Hero>
    <Button
      href="/"
      intent="secondary"
      size="sm"
      className="translate-y-[-1rem] animate-fade-in opacity-0"
    >
      <span>Knowledge. Innovation. Success. Together.</span>
      <Highlight>✨</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      NIBM GALLE
      <br className="hidden md:block" /> Students Association
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Empowering Students to
      <br className="hidden md:block" /> Excel, Innovate, and Make a Difference.
      roadmaps.
    </HeroSubtitle>
    <Button
      href="/"
      intent="primary"
      size="lg"
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
    >
      Get started
      <Highlight>
        <ChevronIcon fill="currentColor" />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
