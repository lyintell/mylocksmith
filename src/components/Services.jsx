import { Car, Home, Building2, Clock, Key, Shield, Smartphone, Lock, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CAR_GALLERY_PATHS, COMMERCIAL_GALLERY_PATHS, HOME_GALLERY_PATHS } from '@/lib/siteAssets';

const categories = [
  {
    icon: Car,
    title: 'Automotive',
    slug: '/car-locksmith-baltimore',
    tagline: "Stranded? We'll get you rolling.",
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
    hoverGlow: 'hover:shadow-red-100',
    images: CAR_GALLERY_PATHS,
    services: [
      { icon: Clock, text: '24/7 Emergency Lockout Service' },
      { icon: Key, text: 'Automotive Key Programming' },
      { icon: Car, text: 'Car Key Duplication & Replacement' },
    ],
  },
  {
    icon: Home,
    title: 'Residential',
    slug: '/house-locksmith-baltimore',
    tagline: 'Keep your home safe & secure.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hoverGlow: 'hover:shadow-blue-100',
    images: HOME_GALLERY_PATHS,
    services: [
      { icon: Clock, text: '24/7 Emergency Lockout Service' },
      { icon: Lock, text: 'Residential Lock Installation & Repair' },
      { icon: Smartphone, text: 'Electronic Keypad & Smart Lock Installation' },
    ],
  },
  {
    icon: Building2,
    title: 'Commercial',
    slug: '/commercial-locksmith-baltimore',
    tagline: 'Protect your business, day and night.',
    color: 'text-gray-700',
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    hoverGlow: 'hover:shadow-gray-200',
    images: COMMERCIAL_GALLERY_PATHS,
    services: [
      { icon: Clock, text: '24/7 Emergency Lockout Service' },
      { icon: Building2, text: 'Commercial Lock Services' },
      { icon: Shield, text: 'Rekeying & Master Key Systems' },
    ],
  },
];

function ServiceCard({ cat, index }) {
  const [hovered, setHovered] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const prev = useCallback((e) => {
    e.preventDefault();
    setActiveImg(i => (i - 1 + cat.images.length) % cat.images.length);
  }, [cat.images.length]);

  const next = useCallback((e) => {
    e.preventDefault();
    setActiveImg(i => (i + 1) % cat.images.length);
  }, [cat.images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg(i => (i + 1) % cat.images.length);
    }, 2500 + index * 300);
    return () => clearInterval(timer);
  }, [cat.images.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative rounded-3xl overflow-hidden border ${cat.border} shadow-lg ${cat.hoverGlow} hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer`}
    >
      {/* Image slideshow top */}
      <div className="relative h-52 overflow-hidden">
        {cat.images.map((img, i) => (
          <motion.img
            key={img}
            src={img}
            alt={`${cat.title} service ${i + 1}`}
            animate={{ opacity: i === activeImg ? 1 : 0, scale: i === activeImg && hovered ? 1.08 : 1 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Left / Right arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-all z-10 backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-all z-10 backdrop-blur-sm"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1">
          {cat.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-white w-3' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <div className={`absolute bottom-4 left-4 inline-flex items-center gap-2 ${cat.bg} ${cat.color} px-3 py-1 rounded-full text-xs font-bold`}>
          <cat.icon className="w-3 h-3" />
          {cat.title}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className={`text-sm font-semibold ${cat.color} mb-1`}>{cat.tagline}</p>
        <Link to={cat.slug}>
          <h3 className={`text-2xl font-black text-foreground mb-5 hover:${cat.color} transition-colors underline-offset-4 hover:underline`}>{cat.title} Services →</h3>
        </Link>

        <ul className="space-y-3 mb-7">
          {cat.services.map(({ icon: Icon, text }, i) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.08 + 0.3 }}
              className="flex items-start gap-3"
            >
              <div className={`mt-0.5 w-6 h-6 rounded-full ${cat.bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-3 h-3 ${cat.color}`} />
              </div>
              <span className="text-foreground/75 text-sm leading-relaxed">{text}</span>
            </motion.li>
          ))}
        </ul>

        <a
          href="tel:4434993999"
          className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition-all border ${cat.border} ${cat.color} hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg`}
        >
          <Phone className="w-4 h-4" />
          Call for This Service
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-70" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-70" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground mt-3 mb-4"
          >
            Complete Locksmith Services in Baltimore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            From car lockouts to smart home security — available 24/7 across Baltimore, Towson, Annapolis, Columbia & all of Maryland.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => <ServiceCard key={cat.title} cat={cat} index={i} />)}
        </div>
      </div>
    </section>
  );
}