import { Helmet } from 'react-helmet-async';
import { Phone, Smartphone, CheckCircle, Home, Building2, Wifi, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import ServiceReviews from '../components/ServiceReviews';
import ServiceAreaMap from '../components/ServiceAreaMap';

const features = [
  { title: 'Keypad & PIN Entry Locks', desc: 'No key needed — unlock with a code. Perfect for rentals, Airbnb, or homes with multiple family members. We install and program all keypad brands.' },
  { title: 'App-Controlled Smart Locks', desc: 'Lock and unlock your door from anywhere using your phone. We install and configure smart locks that work with Apple HomeKit, Google Home, and Alexa.' },
  { title: 'Fingerprint / Biometric Locks', desc: 'The most convenient and secure option — opens with your fingerprint in under a second. Great for home offices and residential entry doors.' },
  { title: 'Deadbolt Upgrades', desc: 'Replace old, worn deadbolts with high-security Schlage, Kwikset, or Medeco hardware. We install and test every installation thoroughly.' },
  { title: 'Commercial Keypad Locks', desc: 'Business door locks without keys. We install commercial-grade electronic locks for offices, storefronts, warehouses, and storage units across Baltimore.' },
  { title: 'Smart Lock Troubleshooting', desc: 'Existing smart lock not working? We diagnose and fix Yale, Schlage, Kwikset Halo, August, Wyze, and other popular brands.' },
];

export default function SmartLockInstallation() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Smart Lock Installation Baltimore | Keypad & Electronic Locks | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Professional smart lock installation in Baltimore, MD. We install keypad locks, app-controlled smart locks, deadbolts, and electronic door locks for homes and businesses. Serving Baltimore, Towson, Annapolis, Columbia, Glen Burnie & all of Maryland. Call 443-499-3999." />
        <meta name="keywords" content="smart lock installation Baltimore, keypad lock installation Baltimore, electronic lock Baltimore, smart lock Baltimore MD, August lock installation Baltimore, Schlage smart lock Baltimore, Kwikset smart lock Baltimore, Yale lock installation Baltimore, keyless entry Baltimore, smart deadbolt Baltimore, electronic deadbolt Baltimore, smart lock install Towson, smart lock install Annapolis, smart lock install Columbia MD, smart lock install Glen Burnie, smart lock Catonsville, keypad door lock Baltimore, biometric lock Baltimore, fingerprint lock Baltimore, Airbnb lock Baltimore, rental property lock Baltimore, home automation lock Baltimore" />
        <link rel="canonical" href="https://mylocksmith.com/smart-lock-installation-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Smart Lock Installation Baltimore",
          "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com" },
          "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD"],
          "description": "Professional smart lock and keypad lock installation for homes and businesses across Baltimore MD. We install, configure, and troubleshoot all major brands.",
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$$" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Residential Locksmith", "item": "https://mylocksmith.com/house-locksmith-baltimore" },
            { "@type": "ListItem", "position": 3, "name": "Smart Lock Installation Baltimore", "item": "https://mylocksmith.com/smart-lock-installation-baltimore" }
          ]
        })}</script>
      </Helmet>

      <ServicePageNavbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Residential & Commercial · All Major Brands
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Smart Lock Installation <span className="text-indigo-300">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Keypad Locks · App-Controlled Locks · Electronic Deadbolts · Fingerprint Locks
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Upgrade your home or business security with a smart lock that works the way you do. No more hiding keys under the mat or worrying about who has a copy. Our licensed locksmiths install, configure, and test all smart lock systems across Baltimore, Towson, Annapolis, Columbia, and all surrounding areas — same day, no fuss.
            </p>
            <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" /> Call: 443 499 3999
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Smartphone, label: 'App-Controlled', sub: 'Lock from anywhere' },
            { icon: Wifi, label: 'Smart Home Ready', sub: 'Works with Alexa & Google' },
            { icon: Shield, label: 'High Security', sub: 'ANSI Grade 1 options' },
            { icon: CheckCircle, label: 'All Brands', sub: 'Schlage, Kwikset, August, Yale' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="font-bold text-foreground text-sm">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">Smart Lock Services We Provide in Baltimore</h2>
          <p className="text-muted-foreground text-center mb-10">We install, configure, and service all types of electronic and smart lock systems.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-foreground mb-3">View Our Full Residential & Commercial Lock Services</h2>
          <p className="text-muted-foreground mb-8 text-sm">Smart lock installation is part of our broader residential and commercial locksmith services:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/house-locksmith-baltimore" className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
              <Home className="w-5 h-5" /> Residential Locksmith
            </Link>
            <Link to="/commercial-locksmith-baltimore" className="flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all">
              <Building2 className="w-5 h-5" /> Commercial Locksmith
            </Link>
          </div>
        </div>
      </section>

      <ServiceReviews />
      <ServiceAreaMap />

      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Ready to Upgrade to a Smart Lock?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">We install and configure same-day across Baltimore, Towson, Annapolis, Columbia & all surrounding areas. Call for a free quote.</p>
        <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
          <Phone className="w-5 h-5" /> 443 499 3999
        </a>
      </section>

      <Footer />
      <MobileEmergencyCTA />
    </div>
  );
}