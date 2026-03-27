import { Helmet } from 'react-helmet-async';
import { Phone, Clock, Lock, Home, Shield, CheckCircle, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';
import ServiceAreaMap from '../components/ServiceAreaMap';
import ServiceReviews from '../components/ServiceReviews';
import { HOME_GALLERY_PATHS } from '@/lib/siteAssets';

const images = [
{ url: HOME_GALLERY_PATHS[0], caption: 'Residential locksmith Baltimore — front door lock installation and deadbolt replacement serving Baltimore, Towson & Pikesville.' },
{ url: HOME_GALLERY_PATHS[1], caption: 'Home lock repair Baltimore — door handle and knob replacement, serving Catonsville, Dundalk & Essex.' },
{ url: HOME_GALLERY_PATHS[2], caption: 'Smart lock rekeying Baltimore — Level smart lock disassembly and cylinder replacement, serving Columbia & Ellicott City.' },
{ url: HOME_GALLERY_PATHS[3], caption: 'Schlage smart deadbolt installation Baltimore — keypad lock setup for homes in Annapolis, Glen Burnie & Severna Park.' },
{ url: HOME_GALLERY_PATHS[4], caption: 'Residential deadbolt and door knob installation Baltimore — Kwikset, Schlage brands in Pasadena & Laurel.' },
{ url: HOME_GALLERY_PATHS[5], caption: 'Garage door lock and bolt repair Baltimore — secure every entry point for homes in Halethorpe, Arbutus & Jessup.' }];


const highlights = [
{ icon: Clock, text: '24/7 Emergency Service' },
{ icon: Home, text: 'All Residential Locks' },
{ icon: Key, text: 'Door Knobs & Deadbolts' },
{ icon: Shield, text: 'Licensed & Insured' }];


const services = [
'24/7 Emergency Home Lockout Baltimore',
'House Lock Change & Replacement',
'Residential Lock Rekeying',
'Deadbolt Installation & Repair',
'Door Knob & Door Handle Replacement',
'Smart Lock & Keypad Installation',
'Safe Opening & Combination Change',
'Storage Unit Lockout Service',
'Master Key System for Homes',
'High-Security Lock Upgrade',
'Post Break-In Lock Replacement',
'Garage Door Lock Repair',
'Sliding Door & Patio Lock Fix',
'Kwikset & Schlage Installation'];


export default function HouseLocksmith() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Residential Locksmith Baltimore | House Lockout, Door Knob & Lock Change | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Residential locksmith in Baltimore, MD. 24/7 home lockout service, door knob replacement, deadbolt installation, rekeying, safe opening, storage unit lockout, and smart lock setup. Serving Baltimore, Towson, Annapolis, Glen Burnie, Columbia & more. Call 443-499-3999." />
        <meta name="keywords" content="residential locksmith Baltimore, house locksmith Baltimore, home lockout Baltimore, door knob replacement Baltimore, deadbolt installation Baltimore, lock change Baltimore, rekey house Baltimore, smart lock installation Baltimore, safe opening Baltimore, storage unit lockout Baltimore, 24 hour locksmith Baltimore, house locksmith Annapolis, house locksmith Towson, house locksmith Glen Burnie" />
        <link rel="canonical" href="https://mylocksmith.com/house-locksmith-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Residential Locksmith Baltimore",
            "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com", "address": { "@type": "PostalAddress", "addressLocality": "Baltimore", "addressRegion": "MD", "addressCountry": "US" } },
            "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD", "Ellicott City MD", "Catonsville MD", "Severna Park MD", "Laurel MD", "Pasadena MD", "Canton Baltimore", "Hampden Baltimore", "Pikesville MD"],
            "description": "24/7 residential locksmith in Baltimore — home lockout, door knob replacement, deadbolt installation, rekeying, smart lock setup, safe opening. Fast same-day service.",
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$$" }
          })}</script>
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Residential Locksmith Baltimore", "item": "https://mylocksmith.com/house-locksmith-baltimore" }]

          })}</script>
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              24/7 Available — Baltimore & Surrounding Areas
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Residential Locksmith <span className="text-blue-400">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Home Lockout · Door Knob & Deadbolt · Rekeying · Safe Opening · Storage Unit Lockout
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
              Locked out of your house? Broken door knob? Need a safe opened or a storage unit unlocked? Our residential locksmith team provides fast, professional, and affordable home lock services <strong className="text-white">24/7</strong> across Baltimore, Towson, Annapolis, Glen Burnie, Columbia, Ellicott City, Catonsville, Severna Park, and all surrounding areas.
            </p>
            <p className="text-white/50 text-sm mb-10 italic">"We Know, Stuff Happens." — Always on call, always on time.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              

              
              

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, text }, i) =>
          <motion.div key={text} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-foreground">{text}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">Home Lock Services in Baltimore & Surrounding Areas</h2>
          <p className="text-muted-foreground text-center mb-10">
            We keep homes safe across Baltimore, Annapolis, Towson, Glen Burnie, Columbia, Ellicott City, Catonsville, Severna Park, Laurel, and all of Maryland — from emergency lockouts to safe openings and storage unit lockouts.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) =>
            <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-3 text-center">Residential Locksmith Jobs Across Baltimore</h2>
          <p className="text-muted-foreground text-center mb-12">Real work — door knobs, deadbolts, rekeying, safe openings, and home lockouts across Baltimore, Towson, Annapolis, Columbia & more.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map(({ url, caption }, i) =>
            <motion.figure key={url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-2xl overflow-hidden shadow-md border border-border bg-gray-50">
                <img src={url} alt={caption} className="w-full h-52 object-cover" loading="lazy" />
                <figcaption className="p-3 text-xs text-muted-foreground leading-relaxed">{caption}</figcaption>
              </motion.figure>
            )}
          </div>
        </div>
      </section>

      <ServiceReviews />
      <ServiceAreaMap />

      {/* CTA */}
      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Need a Residential Locksmith in Baltimore?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Available 24/7 for home lockouts, door knob replacement, safe opening, storage unit lockouts & more across Baltimore and all surrounding areas.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="sms:4434313795" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            💬 Text Us: 443 431 3795
          </a>
        </div>
      </section>

      <Footer />
      <MobileEmergencyCTA />
      <TextMeButton />
    </div>);

}