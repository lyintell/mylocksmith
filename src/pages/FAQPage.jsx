import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Phone } from 'lucide-react';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';

const faqs = [
  {
    category: 'General',
    q: 'How fast can a locksmith get to me in Baltimore?',
    a: 'Our Baltimore locksmiths typically arrive within 15–30 minutes anywhere in the greater Baltimore area — including Baltimore City, Towson, Columbia, Glen Burnie, Annapolis, Ellicott City, Catonsville, Dundalk, Essex, Pasadena, and all surrounding communities.',
  },
  {
    category: 'General',
    q: 'Do you offer 24/7 emergency locksmith services in Baltimore?',
    a: 'Absolutely — we never close. Whether it\'s 3am on a Tuesday or Christmas morning, our licensed Baltimore locksmith team is ready to help. Call 443-499-3999 any time of day or night.',
  },
  {
    category: 'Automotive',
    q: 'Can you make a new car key if I lost all my keys?',
    a: 'Yes! We specialize in car key replacement and programming even with zero working keys. We carry key-cutting equipment and transponder programmers on our service vehicles. We work with all major makes — Toyota, Honda, Ford, Chevy, BMW, Mercedes, Hyundai, Kia, and more — right at your location.',
  },
  {
    category: 'Automotive',
    q: 'How much does a car lockout cost in Baltimore?',
    a: 'Car lockout pricing starts at a competitive flat rate. We always provide a clear, upfront quote before starting any work. No hidden fees, no bait-and-switch pricing — ever. Call 443-499-3999 for an instant estimate.',
  },
  {
    category: 'Automotive',
    q: 'Can you program a transponder key or key fob?',
    a: 'Yes — key fob programming and transponder key programming are among our most common automotive locksmith services in Baltimore. We can program push-to-start keys, smart keys, and traditional chip keys for virtually every vehicle on the market.',
  },
  {
    category: 'Residential',
    q: 'What is rekeying, and do I need it after moving?',
    a: 'Rekeying changes the internal pins of your existing lock so all old keys stop working, without replacing the lock hardware. It\'s faster and cheaper than a full lock replacement. We strongly recommend rekeying whenever you move into a new home — you never know who has a copy of the old keys.',
  },
  {
    category: 'Residential',
    q: 'Can you install smart locks and electronic keypads?',
    a: 'Yes! We install, configure, and program all major brands of smart locks and electronic keypads — including Schlage, Kwikset, Yale, August, and more. Smart lock installation is one of the best upgrades you can make for home security in Baltimore.',
  },
  {
    category: 'Residential',
    q: 'I\'m locked out of my house. How quickly can you come?',
    a: 'House lockouts are one of our most common calls. We prioritize emergency home lockouts and typically arrive within 15–30 minutes throughout the Baltimore metro area. Call us now at 443-499-3999.',
  },
  {
    category: 'Commercial',
    q: 'Do you service commercial properties and businesses?',
    a: 'Yes — we offer full commercial locksmith services in Baltimore including master key systems, access control installation, high-security lock upgrades, commercial door hardware repair, and after-hours emergency lockouts for businesses.',
  },
  {
    category: 'Commercial',
    q: 'Can you create a master key system for my office building?',
    a: 'Absolutely. Master key systems allow certain keys to open multiple locks while restricting others. We design and implement master key systems for offices, apartment complexes, warehouses, and commercial buildings throughout Baltimore.',
  },
  {
    category: 'Trust & Licensing',
    q: 'Are you a licensed and insured locksmith in Maryland?',
    a: 'Yes. MY LOCKSMITH BALTIMORE is fully licensed by the state of Maryland and carries complete liability insurance. Our technicians are background-checked, trained professionals. You can trust us to work on your vehicle, home, or business.',
  },
  {
    category: 'Trust & Licensing',
    q: 'What areas of Baltimore and Maryland do you serve?',
    a: 'We serve the entire Baltimore metro area including Baltimore City, Towson, Columbia, Glen Burnie, Annapolis, Ellicott City, Catonsville, Dundalk, Essex, Pasadena, Parkville, Middle River, Rosedale, Severna Park, Laurel, Jessup, Elkridge, Brooklyn Park, Linthicum Heights, Arbutus, Halethorpe, and dozens more communities.',
  },
];

const categories = ['All', 'General', 'Automotive', 'Residential', 'Commercial', 'Trust & Licensing'];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-primary/40 shadow-md shadow-primary/10' : 'border-border hover:border-primary/20'}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <span className="text-xs text-primary font-semibold uppercase tracking-wide block mb-1">{faq.category}</span>
          <span className="font-semibold text-foreground text-base">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-muted-foreground text-sm leading-relaxed bg-white border-t border-border/50">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="font-inter">
      <Helmet>
        <title>Locksmith FAQ Baltimore | Common Questions | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Answers to common locksmith questions in Baltimore — car lockouts, key programming, rekeying, smart locks, pricing, and more. MY LOCKSMITH BALTIMORE serves all of Baltimore MD 24/7." />
        <meta name="keywords" content="locksmith FAQ Baltimore, locksmith questions Baltimore, how much does locksmith cost Baltimore, locksmith near me Baltimore FAQ, car lockout Baltimore, rekey house Baltimore" />
        <link rel="canonical" href="https://mylocksmith.com/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Baltimore Locksmith FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              Everything you need to know about our locksmith services in Baltimore, MD — car lockouts, key programming, rekeying, smart locks, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-border sticky top-16 z-30">
        <div className="max-w-3xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {filtered.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="bg-gray-950 rounded-3xl p-8 text-center text-white">
            <p className="font-bold text-xl mb-2">Still have questions?</p>
            <p className="text-white/50 text-sm mb-6">Our Baltimore locksmith team is available 24/7 to help you directly.</p>
            <a href="tel:4434993999" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105">
              <Phone className="w-4 h-4" /> Call 443 499 3999
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileEmergencyCTA />
      <TextMeButton />
    </div>
  );
}