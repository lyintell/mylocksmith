import { Helmet } from 'react-helmet-async';
import { Phone, Clock, Building2, Shield, CheckCircle, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';
import ServiceAreaMap from '../components/ServiceAreaMap';
import ServiceReviews from '../components/ServiceReviews';
import { COMMERCIAL_GALLERY_PATHS } from '@/lib/siteAssets';

const images = [
{ url: COMMERCIAL_GALLERY_PATHS[0], caption: 'Commercial storefront lock installation Baltimore — cylinder lock and key for business entrances in Baltimore, Towson & Columbia.' },
{ url: COMMERCIAL_GALLERY_PATHS[1], caption: 'Commercial door lock repair Baltimore — storefront door handle and lock replacement serving Dundalk, Essex & Middle River.' },
{ url: COMMERCIAL_GALLERY_PATHS[2], caption: 'Office electric strike lock installation Baltimore — access control for commercial buildings in Catonsville & Glen Burnie.' },
{ url: COMMERCIAL_GALLERY_PATHS[3], caption: 'Commercial panic bar and exit device repair Baltimore — UL-listed hardware for offices and storefronts in Annapolis & Ellicott City.' },
{ url: COMMERCIAL_GALLERY_PATHS[4], caption: 'Commercial mortise lock installation Baltimore — heavy-duty business door lock serving Laurel, Jessup & Hanover.' },
{ url: COMMERCIAL_GALLERY_PATHS[5], caption: 'Commercial door closer and latch repair Baltimore — same-day business locksmith service in Pasadena & Severna Park.' },
{ url: COMMERCIAL_GALLERY_PATHS[6], caption: 'Industrial lock and panic hardware installation Baltimore — commercial locksmith experts serving Pikesville & Owings Mills.' },
{ url: COMMERCIAL_GALLERY_PATHS[7], caption: 'Commercial keypad and smart lock installation Baltimore — keyless entry for businesses in Halethorpe, Arbutus & Linthicum.' }];


const highlights = [
{ icon: Clock, text: '24/7 Emergency Service' },
{ icon: Building2, text: 'All Business Types' },
{ icon: Key, text: 'Master Key Systems' },
{ icon: Shield, text: 'Licensed & Insured' }];


const services = [
'24/7 Emergency Business Lockout Baltimore',
'Commercial Door Knob & Handle Replacement',
'Master Key System Installation',
'Commercial Lock Rekeying',
'Deadbolt & High-Security Lock Install',
'Panic Bar & Exit Device Installation',
'Storefront Lock Repair & Replace',
'Safe Opening & Combination Change',
'Storage Unit Lockout Service',
'Keypad Door Lock Installation',
'Post Break-In Lock Replacement',
'Mailbox Lock Repair & Replacement',
'Office Cabinet & Desk Lock Repair',
'Padlock & Chain Lock Services'];


export default function CommercialLocksmith() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Commercial Locksmith Baltimore | Business Lock, Safe & Storage Unit Services | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Commercial locksmith in Baltimore, MD. 24/7 business lockout, door knob replacement, master key systems, safe opening, storage unit lockout, and deadbolt installation. Serving Baltimore, Towson, Annapolis, Columbia, Glen Burnie & more. Call 443-499-3999." />
        <meta name="keywords" content="commercial locksmith Baltimore, business locksmith Baltimore, office lockout Baltimore, master key system Baltimore, safe opening Baltimore, storage unit lockout Baltimore, commercial lock installation Baltimore, 24 hour commercial locksmith, door knob replacement Baltimore, commercial locksmith Annapolis, commercial locksmith Towson, commercial locksmith Columbia MD" />
        <link rel="canonical" href="https://mylocksmith.com/commercial-locksmith-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Locksmith Baltimore",
            "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com", "address": { "@type": "PostalAddress", "addressLocality": "Baltimore", "addressRegion": "MD", "addressCountry": "US" } },
            "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD", "Ellicott City MD", "Catonsville MD", "Dundalk MD", "Laurel MD", "Jessup MD", "Downtown Baltimore", "Harbor East Baltimore"],
            "description": "24/7 commercial locksmith in Baltimore — business lockout, master key systems, safe opening, storage unit lockout, panic bars, deadbolts. Fast professional service.",
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$$" }
          })}</script>
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Commercial Locksmith Baltimore", "item": "https://mylocksmith.com/commercial-locksmith-baltimore" }]

          })}</script>
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-gray-500/20 border border-gray-400/40 text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
              24/7 Available — Baltimore & Surrounding Areas
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Commercial Locksmith <span className="text-gray-300">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Business Lockout · Door Knob & Deadbolt · Master Keys · Safe Opening · Storage Unit Lockout
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
              Protecting Baltimore businesses day and night. Whether you're locked out of your office, need a safe opened, a storage unit unlocked, or want to install a master key system — our expert commercial locksmiths are ready <strong className="text-white">24/7</strong> across Baltimore, Towson, Annapolis, Columbia, Glen Burnie, Ellicott City, Catonsville, and all surrounding areas.
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
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-700" />
              </div>
              <p className="text-sm font-semibold text-foreground">{text}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">Commercial Lock Services for Baltimore Businesses</h2>
          <p className="text-muted-foreground text-center mb-10">
            From small storefronts to large offices — we provide complete commercial locksmith solutions across Baltimore, Annapolis, Towson, Columbia, Glen Burnie, Ellicott City, Catonsville, Dundalk, Laurel, and all surrounding counties.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) =>
            <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border shadow-sm">
                <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-3 text-center">Commercial Locksmith Work Across Baltimore & Maryland</h2>
          <p className="text-muted-foreground text-center mb-12">Real jobs — master keys, safe openings, storage unit lockouts, door knob replacements across Baltimore, Towson, Annapolis & more.</p>
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
        <h2 className="text-3xl font-black mb-3">Need a Commercial Locksmith in Baltimore?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">We serve businesses 24/7 across Baltimore, Annapolis, Towson, Columbia & all surrounding areas. Fast, professional, and affordable.</p>
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