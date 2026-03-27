import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import EmergencyBanner from '../components/EmergencyBanner';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';
import CarMakesSection from '../components/CarMakesSection';
import ServiceAreasSection from '../components/ServiceAreasSection';
import { HOME_HERO_IMAGE_PATH } from '@/lib/siteAssets';

export default function Home() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>MY LOCKSMITH BALTIMORE | 24/7 Emergency Locksmith Services</title>
        <meta name="description" content="Baltimore's trusted locksmith available 24/7. Car lockouts, key programming, smart lock installation, rekeying & more. Fast response across Baltimore, MD. Call 443-499-3999." />
        <meta name="keywords" content="locksmith Baltimore, emergency locksmith Baltimore, 24 hour locksmith Baltimore, car lockout Baltimore, locksmith near me Baltimore MD, key programming Baltimore, smart lock installation Baltimore, residential locksmith Baltimore, commercial locksmith Baltimore, locksmith Canton Baltimore, locksmith Federal Hill Baltimore, locksmith Hampden Baltimore, locksmith Pikesville, locksmith Fells Point, car key replacement Baltimore, house lockout Baltimore, rekey Baltimore, Toyota key replacement Baltimore, Honda key programming Baltimore, Ford key replacement Baltimore, Chevrolet key Baltimore, transponder key Baltimore, car locksmith Towson 21204, car locksmith Severn 21144, car locksmith Pikesville 21208, car locksmith Glen Burnie 21060, locksmith 21201, locksmith 21224, locksmith Annapolis 21401, locksmith Columbia 21044, locksmith Ellicott City 21042, locksmith Dundalk 21222, locksmith Essex 21221, locksmith Pasadena 21122, locksmith Catonsville 21228, locksmith Laurel 20707, laser cut key Baltimore, smart key programming Baltimore, key fob replacement Baltimore, ignition repair Baltimore, broken key extraction Baltimore, motorcycle key Baltimore, spare car key Baltimore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mylocksmith.com" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mylocksmith.com" />
        <meta property="og:title" content="MY LOCKSMITH BALTIMORE | 24/7 Emergency Locksmith" />
        <meta property="og:description" content="Baltimore's most trusted locksmith. Available 24/7 for automotive, residential & commercial locksmith services. Call 443-499-3999." />
        <meta property="og:image" content={HOME_HERO_IMAGE_PATH} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MY LOCKSMITH BALTIMORE | 24/7 Emergency Locksmith" />
        <meta name="twitter:description" content="Baltimore's most trusted locksmith. Available 24/7. Call 443-499-3999." />
        <meta name="twitter:image" content={HOME_HERO_IMAGE_PATH} />

        {/* Local Business Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Locksmith",
          "name": "MY LOCKSMITH BALTIMORE",
          "telephone": "+14434993999",
          "email": "mylocksmith410@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Baltimore",
            "addressRegion": "MD",
            "addressCountry": "US"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "$$",
          "url": "https://mylocksmith.com",
          "areaServed": "Baltimore, MD"
        })}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <EmergencyBanner />
      <Services />
      <WhyUs />
      <Testimonials />
      <CarMakesSection />
      <ServiceAreasSection />
      <FAQ />
      <Contact />
      <Footer />
      <MobileEmergencyCTA />
      <TextMeButton />
    </div>
  );
}