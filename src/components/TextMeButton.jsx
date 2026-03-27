import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TextMeButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.a
      href="sms:4434313795"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 60 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex items-center gap-2 text-white px-4 py-2.5 rounded-l-full font-bold text-sm shadow-lg pointer-events-auto"
      style={{
        backgroundColor: 'rgba(37, 99, 235, 0.95)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-label="Text us"
    >
      <MessageCircle className="w-4 h-4 flex-shrink-0" />
      <span>Text Me 🔑</span>
    </motion.a>
  );
}