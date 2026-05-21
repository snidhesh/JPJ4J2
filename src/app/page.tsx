import JsonLd from './JsonLd';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroductionSection } from '@/components/sections/IntroductionSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { StatementSection } from '@/components/sections/StatementSection';
import { OutdoorSection } from '@/components/sections/OutdoorSection';
import { SpecificationSection } from '@/components/sections/SpecificationSection';
import { FloorPlanSection } from '@/components/sections/FloorPlanSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import {
  LIVING_IMAGES,
  KITCHEN_IMAGES,
  DINING_IMAGES,
  BEDROOM_IMAGES,
  MASTER_IMAGES,
} from '@/lib/images';
import { SECTION_COPY } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <VideoSection />

        <GallerySection id="living" gallery={LIVING_IMAGES} {...SECTION_COPY.living} />
        <GallerySection id="kitchen" gallery={KITCHEN_IMAGES} {...SECTION_COPY.kitchen} alt />
        <GallerySection id="dining" gallery={DINING_IMAGES} {...SECTION_COPY.dining} />

        <StatementSection />

        <GallerySection id="bedrooms" gallery={BEDROOM_IMAGES} {...SECTION_COPY.bedrooms} />
        <GallerySection id="master" gallery={MASTER_IMAGES} {...SECTION_COPY.master} alt />

        <OutdoorSection />
        <SpecificationSection />
        <FloorPlanSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
