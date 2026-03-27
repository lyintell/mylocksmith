import { Clock, Shield, Star, Zap, MapPin, ThumbsUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  { icon: Clock, title: '24/7 Availability', desc: 'Day or night, weekends or holidays — always ready when you need us most.' },
  { icon: Zap, title: 'Fast Response', desc: 'Quick arrival times across Baltimore. Emergencies can\'t wait and neither do we.' },
  { icon: MapPin, title: 'Local Baltimore Experts', desc: 'Proud to serve the Baltimore community. We know the area and are always nearby.' },
  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed and insured for your complete peace of mind and protection.' },
  { icon: Star, title: '5-Star Service', desc: 'Our customers love us. We take pride in every job, big or small.' },
  { icon: ThumbsUp, title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. Honest quotes before we start every job.' },
];

const stats = [
  { value: '24/7', label: 'Always Available' },
  { value: '500+', label: 'Jobs Completed' },
  { value: '5★', label: 'Average Rating' },
  { value: '<30min', label: 'Avg. Response' },
];

function StatCounter({ stat, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</div>
      <div className="text-white/50 text-sm">{stat.label}</div>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-14 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-3 mb-4"
          >
            Baltimore's Trusted Locksmith
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl mx-auto"
          >
            We've built our reputation on reliability, speed, and honest service.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 mb-8"
        >
          {stats.map((s, i) => <StatCounter key={s.label} stat={s} delay={i * 0.1} />)}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}