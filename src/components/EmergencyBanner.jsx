import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmergencyBanner() {
  return (
    <section className="relative bg-primary overflow-hidden py-10">
      {/* Animated background shapes */}
      <motion.div
        animate={{ x: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
      
      <motion.div
        animate={{ x: [0, -20, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
      

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5">
            
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              
              <Phone className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <p className="font-black text-2xl md:text-3xl">Locked Out Right Now?</p>
              <p className="text-white/75 text-sm mt-1">Available 24/7 across Baltimore — we'll be there fast.</p>
            </div>
          </motion.div>

          










          
        </div>
      </div>
    </section>);

}