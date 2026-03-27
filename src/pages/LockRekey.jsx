import { Helmet } from 'react-helmet-async';
import { Phone, Key, CheckCircle, Home, Building2, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import ServiceReviews from '../components/ServiceReviews';
import ServiceAreaMap from '../components/ServiceAreaMap';

const reasons = [
  { title: 'Just Moved Into a New Home', desc: 'You don\'t know how many copies of the old keys are floating around. Rekeying immediately after moving is the smartest security step you can take.' },
  { title: 'Lost or Stolen Keys', desc: 'If your keys are lost or stolen, someone could use them. Rekeying is faster and cheaper than full lock replacement and makes all old keys useless.' },
  { title: 'After a Breakup or Roommate Change', desc: 'Protect yourself. Rekeying after a relationship ends or a tenant moves out is standard practice — and it\'s quick and affordable.' },
  { title: 'End of Tenancy / Rental Turnover', desc: 'Landlords should rekey between every tenant to reduce liability and ensure complete security for incoming renters.' },
  { title: 'After Firing an Employee', desc: 'If a former employee had key access to your business, rekey immediately. Our commercial locksmiths serve businesses across Baltimore 24/7.' },
  { title: 'Upgrading Home Security', desc: 'Rekeying is the fastest way to refresh your home security without buying all-new hardware. We rekey Schlage, Kwikset, Medeco, and all major brands.' },
];

export default function LockRekey() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Lock Rekeying Baltimore | Rekey House & Business Locks | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Professional lock rekeying in Baltimore, MD. We rekey residential and commercial locks same-day — faster and cheaper than lock replacement. Serving Baltimore, Towson, Annapolis, Columbia, Glen Burnie & all of Maryland. Call 443-499-3999." />
        <meta name="keywords" content="lock rekey Baltimore, rekey house Baltimore, rekey locks Baltimore MD, rekeying locksmith Baltimore, rekey home Baltimore, rekey after moving Baltimore, rekey apartment Baltimore, rekey business Baltimore, rekey commercial Baltimore, locksmith rekey Baltimore, Kwikset rekey Baltimore, Schlage rekey Baltimore, rekey Towson, rekey Annapolis, rekey Columbia MD, rekey Glen Burnie, rekey Catonsville, rekey Dundalk, rekey Essex, how much to rekey locks Baltimore, same day rekey Baltimore" />
        <link rel="canonical" href="https://mylocksmith.com/lock-rekey-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Lock Rekeying Baltimore",
          "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com" },
          "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD"],
          "description": "Same-day lock rekeying for homes and businesses in Baltimore MD. Cheaper and faster than lock replacement.",
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Lock Rekey Baltimore", "item": "https://mylocksmith.com/lock-rekey-baltimore" }
          ]
        })}</script>
      </Helmet>

      <ServicePageNavbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Same-Day Service · Cheaper Than Lock Replacement
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Lock Rekeying <span className="text-blue-400">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Rekey House Locks · Business Rekeying · Apartment Rekeying · Master Key Systems
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Rekeying changes the internal pins of your lock so all old keys stop working — <strong className="text-white">without replacing the entire lock</strong>. It's faster, more affordable, and just as effective as buying new hardware. We rekey residential and commercial locks same-day anywhere in Baltimore, Towson, Annapolis, Columbia, and all surrounding areas.
            </p>
            <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" /> Call: 443 499 3999
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why rekey */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">When Should You Rekey Your Locks?</h2>
          <p className="text-muted-foreground text-center mb-10">Rekeying is the smart choice in any of these situations:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
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

      {/* Rekey vs replace */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-10 text-center">Rekeying vs Lock Replacement — What's the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="text-xl font-black text-blue-700 mb-4 flex items-center gap-2"><Key className="w-5 h-5" /> Rekeying (Recommended)</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                {['Costs significantly less than replacement', 'Takes 10–20 minutes per lock', 'Same lock hardware — just new key pins', 'Old keys immediately stop working', 'Works for Schlage, Kwikset, Medeco & most brands', 'Best option when hardware is still in good condition'].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-border p-6">
              <h3 className="text-xl font-black text-foreground mb-4 flex items-center gap-2"><Shield className="w-5 h-5" /> Lock Replacement</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['Higher cost — new hardware required', 'Better when lock is damaged or old', 'Option to upgrade to high-security hardware', 'Can install smart locks, keypads, deadbolts', 'Recommended after break-in or forced entry', 'We install Schlage, Kwikset, Medeco & more'].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">Not sure which you need? Our technician will assess your locks and give you an honest recommendation — no upsell.</p>
        </div>
      </section>

      {/* Links to main pages */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-foreground mb-3">Rekeying Services by Property Type</h2>
          <p className="text-muted-foreground mb-8 text-sm">Click below to view our full residential or commercial locksmith page:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/house-locksmith-baltimore" className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
              <Home className="w-5 h-5" /> Residential Rekeying
            </Link>
            <Link to="/commercial-locksmith-baltimore" className="flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all">
              <Building2 className="w-5 h-5" /> Commercial Rekeying
            </Link>
          </div>
        </div>
      </section>

      <ServiceReviews />
      <ServiceAreaMap />

      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Rekey Your Locks Today — Baltimore & All Surrounding Areas</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Same-day rekeying service, upfront pricing, no hidden fees. Call now for a free quote.</p>
        <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
          <Phone className="w-5 h-5" /> 443 499 3999
        </a>
      </section>

      <Footer />
      <MobileEmergencyCTA />
    </div>
  );
}