import { Helmet } from 'react-helmet-async';
import { Phone, Key, CheckCircle, Car, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import ServiceReviews from '../components/ServiceReviews';
import ServiceAreaMap from '../components/ServiceAreaMap';

const keyTypes = [
  { title: 'Transponder / Chip Keys', desc: 'The most common type — has an embedded microchip that must be programmed to your car\'s ECU. We program all brands on-site.', makes: 'Toyota, Honda, Ford, Nissan, Hyundai, Kia, Subaru, Mazda, Mitsubishi' },
  { title: 'Smart Keys & Proximity Keys', desc: 'Push-to-start vehicles use a smart key that communicates wirelessly. We cut and program these without a dealer visit.', makes: 'Lexus, Acura, Infiniti, Cadillac, Lincoln, newer Toyota, Honda, Ford' },
  { title: 'Key Fobs & Remote Controls', desc: 'Lost or broken key fob? We replace and reprogram factory-style fobs for all vehicles — no dealership markup.', makes: 'All makes and models with factory remote entry' },
  { title: 'Laser Cut (High-Security) Keys', desc: 'Precision-cut keys with unique sidewinder pattern for high-security locks. We carry the equipment to cut and program these on-site.', makes: 'Dodge, Chrysler, Jeep, GM, some European makes' },
  { title: 'Duplicate / Spare Keys', desc: 'Need a spare before you lose your only key? We duplicate car keys for all types — basic, transponder, and smart keys.', makes: 'All makes and models' },
  { title: 'Ignition Key Replacement', desc: 'Ignition worn out or key broken inside? We extract broken keys and cut/program new ignition keys on the spot.', makes: 'All makes — especially older Toyota, Honda, GM, Ford' },
];

const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'GMC', 'Nissan', 'Hyundai', 'Kia', 'Jeep', 'Dodge', 'Chrysler', 'Ram', 'Acura', 'Lexus', 'Infiniti', 'Subaru', 'Mazda', 'Mitsubishi', 'Volkswagen', 'Lincoln', 'Cadillac', 'Buick', 'Volvo', 'Saab', 'Hummer', 'Mercury', 'Pontiac', 'Saturn', 'Oldsmobile', 'Suzuki'];

export default function CarKeyReplacement() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Car Key Replacement Baltimore | Transponder Key Programming | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Lost your car keys in Baltimore? MY LOCKSMITH BALTIMORE provides on-site car key replacement, transponder key programming, smart key duplication, and key fob replacement for all makes and models. No dealer needed. Fast 15–30 min service anywhere in Baltimore, Towson, Annapolis, Columbia & more. Call 443-499-3999." />
        <meta name="keywords" content="car key replacement Baltimore, transponder key programming Baltimore, lost car keys Baltimore, car key duplication Baltimore, key fob replacement Baltimore, smart key programming Baltimore, chip key Baltimore, car key copy Baltimore, replace car key Baltimore MD, Toyota key replacement Baltimore, Honda key replacement Baltimore, Ford key replacement Baltimore, Chevy key replacement Baltimore, Hyundai key replacement Baltimore, Kia key replacement Baltimore, Nissan key replacement Baltimore, car key replacement Towson, car key replacement Glen Burnie, car key replacement Annapolis, car key replacement Columbia MD, key programming near me Baltimore, automotive locksmith key replacement, ignition key replacement Baltimore, push to start key Baltimore, laser cut key Baltimore" />
        <link rel="canonical" href="https://mylocksmith.com/car-key-replacement-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Car Key Replacement Baltimore",
          "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com" },
          "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD", "Ellicott City MD", "Catonsville MD"],
          "description": "On-site car key replacement and transponder key programming for all makes and models in Baltimore MD. No dealer needed — we come to you.",
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$$" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Car Locksmith Baltimore", "item": "https://mylocksmith.com/car-locksmith-baltimore" },
            { "@type": "ListItem", "position": 3, "name": "Car Key Replacement Baltimore", "item": "https://mylocksmith.com/car-key-replacement-baltimore" }
          ]
        })}</script>
      </Helmet>

      <ServicePageNavbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              On-Site Service — No Dealer Needed
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Car Key Replacement <span className="text-primary">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Transponder Keys · Smart Keys · Key Fobs · Laser Cut Keys · All Makes
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Lost all your car keys? Broken key in the ignition? Need a spare programmed before you lose the only one you have? Our mobile car key replacement service comes to <strong className="text-white">your location</strong> across Baltimore, Towson, Annapolis, Columbia, Glen Burnie, and all of Maryland — and we typically program a new key in <strong className="text-white">under an hour</strong>, at a fraction of dealership prices.
            </p>
            <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" /> Call: 443 499 3999
            </a>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Zap, label: 'Under 1 Hour', sub: 'Most key replacements' },
            { icon: Key, label: 'All Key Types', sub: 'Chip, smart, fob, laser cut' },
            { icon: Car, label: 'All Makes', sub: '30+ brands covered' },
            { icon: Shield, label: 'No-Dealer Prices', sub: 'Save 40–70% vs dealer' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <p className="font-bold text-foreground text-sm">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">Types of Car Keys We Replace & Program in Baltimore</h2>
          <p className="text-muted-foreground text-center mb-10">Every vehicle uses a different key technology — we handle all of them.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {keyTypes.map(({ title, desc, makes }) => (
              <div key={title} className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <h3 className="font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{desc}</p>
                <p className="text-xs text-muted-foreground/70"><span className="font-medium">Common vehicles:</span> {makes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Makes */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-foreground mb-3">Car Brands We Service in Baltimore</h2>
          <p className="text-muted-foreground mb-8 text-sm">We replace and program keys for virtually every vehicle — domestic, Japanese, Korean, and European makes.</p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {makes.map(m => (
              <span key={m} className="bg-gray-50 border border-border px-3 py-1.5 rounded-full text-sm font-medium text-foreground/70">{m}</span>
            ))}
          </div>
          <Link to="/car-locksmith-baltimore" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
            View All Car Locksmith Services →
          </Link>
        </div>
      </section>

      {/* Cheaper than dealer */}
      <section className="py-14 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4">Why Pay Dealership Prices?</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Dealers charge <strong className="text-white">$200–$500+</strong> for key programming, require towing your car in, and may take days. We come to <strong className="text-white">you</strong> — anywhere in Baltimore — and typically complete the job in under an hour for a fraction of the cost. No appointment. No tow truck. No wait.
          </p>
          <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" /> Get a Free Quote: 443 499 3999
          </a>
        </div>
      </section>

      <ServiceReviews />
      <ServiceAreaMap />

      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Need a Car Key Replacement in Baltimore?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">We come to you — 24/7, no tow truck needed, cheaper than any dealer.</p>
        <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
          <Phone className="w-5 h-5" /> 443 499 3999
        </a>
      </section>

      <Footer />
      <MobileEmergencyCTA />
    </div>
  );
}