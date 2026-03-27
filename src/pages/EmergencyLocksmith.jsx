import { Helmet } from 'react-helmet-async';
import { Phone, Clock, AlertTriangle, CheckCircle, Car, Home, Building2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import ServiceReviews from '../components/ServiceReviews';
import ServiceAreaMap from '../components/ServiceAreaMap';

const services = [
  { icon: Car, title: 'Emergency Car Lockout', desc: 'Locked out of your car anywhere in Baltimore? We arrive in 15–30 min, open your door with zero damage.', link: '/car-locksmith-baltimore', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Home, title: 'Emergency Home Lockout', desc: 'Locked out of your house? Our residential locksmith reaches you fast — 24/7, nights, weekends, holidays.', link: '/house-locksmith-baltimore', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Building2, title: 'Emergency Business Lockout', desc: 'Locked out of your office or storefront? We respond to commercial lockouts across Baltimore County fast.', link: '/commercial-locksmith-baltimore', color: 'text-gray-700', bg: 'bg-gray-100' },
  { icon: AlertTriangle, title: 'Post Break-In Lock Replacement', desc: 'After a break-in, we replace damaged locks immediately — securing your home or business same night.', link: '/house-locksmith-baltimore', color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function EmergencyLocksmith() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>24 Hour Emergency Locksmith Baltimore | Fastest Response — MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Need an emergency locksmith in Baltimore right now? MY LOCKSMITH BALTIMORE responds in 15–30 minutes, 24 hours a day, 7 days a week. Car lockout, home lockout, business lockout — we cover all of Baltimore, Towson, Annapolis, Columbia, Glen Burnie & more. Call 443-499-3999." />
        <meta name="keywords" content="emergency locksmith Baltimore, 24 hour locksmith Baltimore, locksmith near me Baltimore, emergency car lockout Baltimore, emergency home lockout Baltimore, locksmith open now Baltimore, 24 7 locksmith Baltimore MD, emergency locksmith Towson, emergency locksmith Annapolis, emergency locksmith Columbia MD, emergency locksmith Glen Burnie, emergency locksmith Dundalk, emergency locksmith Essex, emergency locksmith Catonsville, emergency locksmith Pikesville, fastest locksmith Baltimore, locksmith Baltimore tonight, locksmith Baltimore right now" />
        <link rel="canonical" href="https://mylocksmith.com/emergency-locksmith-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "24 Hour Emergency Locksmith Baltimore",
          "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com" },
          "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD", "Ellicott City MD", "Catonsville MD", "Dundalk MD", "Essex MD", "Laurel MD"],
          "description": "24/7 emergency locksmith in Baltimore — fastest response time in the area. Car lockout, home lockout, and commercial lockout service available now.",
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$$" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Emergency Locksmith Baltimore", "item": "https://mylocksmith.com/emergency-locksmith-baltimore" }
          ]
        })}</script>
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-red-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Available Right Now — 24/7/365
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Emergency Locksmith <span className="text-primary">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              15–30 Minute Response · Car Lockout · Home Lockout · Business Lockout
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Locked out? Don't panic — our emergency locksmith team is dispatched from central Baltimore and reaches you in <strong className="text-white">15 to 30 minutes</strong> anywhere in Baltimore City, Baltimore County, Anne Arundel County, Howard County, and all surrounding areas. We answer every call, 24 hours a day, 365 days a year — including Christmas, Thanksgiving, and 3am on a Sunday.
            </p>
            <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-transform animate-pulse">
              <Phone className="w-6 h-6" /> 443 499 3999 — Call Now
            </a>
            <p className="text-white/40 text-xs mt-4">No hold time. A real locksmith answers.</p>
          </motion.div>
        </div>
      </section>

      {/* Response stats */}
      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: '15–30 Min', label: 'Average Response Time' },
            { stat: '24/7/365', label: 'Always Available' },
            { stat: '5★', label: 'Google Rating' },
            { stat: '100%', label: 'No-Damage Guarantee' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-3xl font-black text-primary">{stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency service types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">Emergency Locksmith Services We Offer in Baltimore</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Every locksmith emergency is different. Click a service below to learn more and see our full service pages.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, link, color, bg }) => (
              <Link key={title} to={link} className="group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className={`text-lg font-black text-foreground mb-2 group-hover:${color} transition-colors`}>{title} →</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-10 text-center">What Happens When You Call Our Emergency Locksmith?</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'You Call — A Real Person Answers', desc: 'No hold music, no voicemail. Our dispatcher picks up immediately, takes your location and situation, and gives you an honest ETA.' },
              { step: '2', title: 'Technician Dispatched Immediately', desc: 'Our nearest mobile locksmith is sent to your location. We typically arrive within 15–30 minutes anywhere in the Baltimore metro area.' },
              { step: '3', title: 'You Get a Firm Quote Before We Start', desc: 'No surprises. We assess the situation and give you a clear, upfront price before any work begins. What we quote is what you pay.' },
              { step: '4', title: 'Problem Solved — Fast & Clean', desc: 'We use professional tools to open your door, replace your key, or fix your lock — with no damage to your car, home, or business.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-black text-lg flex items-center justify-center flex-shrink-0">{step}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-foreground mb-4">Emergency Locksmith Coverage — Baltimore & All Surrounding Areas</h2>
          <p className="text-muted-foreground mb-8 text-sm">We respond to locksmith emergencies across all of these areas and more:</p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['Baltimore City', 'Towson', 'Pikesville', 'Catonsville', 'Dundalk', 'Essex', 'Middle River', 'Parkville', 'Rosedale', 'White Marsh', 'Perry Hall', 'Glen Burnie', 'Linthicum Heights', 'Severn', 'Pasadena', 'Severna Park', 'Annapolis', 'Arnold', 'Columbia', 'Ellicott City', 'Elkridge', 'Laurel', 'Jessup', 'Hanover', 'Owings Mills', 'Reisterstown', 'Bel Air', 'Edgewood'].map(a => (
              <span key={a} className="bg-white border border-border text-foreground/70 px-3 py-1.5 rounded-full text-xs font-medium">{a}</span>
            ))}
          </div>
          <a href="tel:4434993999" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all">
            <Phone className="w-5 h-5" /> Call Now: 443 499 3999
          </a>
        </div>
      </section>

      <ServiceReviews />
      <ServiceAreaMap />

      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Locked Out Right Now?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Call immediately — we dispatch within minutes, 24/7, across all of Baltimore and surrounding areas.</p>
        <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-transform">
          <Phone className="w-6 h-6" /> 443 499 3999
        </a>
      </section>

      <Footer />
      <MobileEmergencyCTA />
    </div>
  );
}