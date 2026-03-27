import { Phone, Clock, Shield, Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HOME_HERO_IMAGE_PATH } from '@/lib/siteAssets';

const words = ['Locked Out?', 'Lost Your Keys?', 'Need a Rekey?', 'Need a Smart Lock?'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('${HOME_HERO_IMAGE_PATH}')` }} />
      
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      

      {/* Red accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-top" />
      

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 pt-28 pb-24 sm:py-36 md:py-44 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6">
            
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
            Live 24/7 — Baltimore, MD
          </motion.div>

          {/* SEO H1 — hidden visually but readable by Google */}
          <h1 className="sr-only">24/7 Locksmith Baltimore MD — Emergency Car Lockout, Key Programming, Residential & Commercial Locksmith Services</h1>

          {/* Animated visual headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            
            <div className="h-16 sm:h-20 md:h-24 lg:h-28 overflow-hidden mb-2" aria-hidden="true">
              <motion.p
                key={wordIndex}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-tight">
                
                {words[wordIndex]}
              </motion.p>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              We're On Our Way.
            </p>
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/65 mb-3 font-light max-w-xl">
            
            Baltimore's most trusted 24/7 locksmith — automotive, residential & commercial. Serving Baltimore City, Towson, Annapolis, Columbia, Glen Burnie & all surrounding areas.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base text-white/40 italic mb-8 sm:mb-12">
            
            "We Know, Stuff Happens."
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-10 sm:mb-16">
            
            





            
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-all backdrop-blur-sm w-full sm:w-auto">
              
              Explore Services
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-8">
            
            {[
            { icon: Clock, text: '24/7 Emergency' },
            { icon: Shield, text: 'Licensed & Insured' },
            { icon: Star, text: '5-Star Rated' }].
            map(({ icon: Icon, text }, i) =>
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="flex items-center gap-2 text-white/55 text-xs sm:text-sm">
              
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                {text}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
        
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>);

}