import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_LOGO_PATH } from '@/lib/siteAssets';

export default function ServicePageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">

        {/* Back arrow (mobile) + Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
          <a href="tel:4434993999" className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 shadow-md bg-white hover:border-primary transition-all">
            <img src={SITE_LOGO_PATH} alt="MY LOCKSMITH BALTIMORE Locksmith" className="w-full h-full object-contain p-1" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm">Home</Link>
          <Link to="/car-locksmith-baltimore" className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm">Automotive</Link>
          <Link to="/house-locksmith-baltimore" className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm">Residential</Link>
          <Link to="/commercial-locksmith-baltimore" className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm">Commercial</Link>
        </nav>

        {/* CTA Phone (desktop) */}
        <a
          href="tel:4434993999"
          className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
        >
          <Phone className="w-4 h-4" />
          443 499 3999
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-foreground/80 font-medium py-1">Home</Link>
              <Link to="/car-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-foreground/80 font-medium py-1">Automotive Locksmith</Link>
              <Link to="/house-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-foreground/80 font-medium py-1">Residential Locksmith</Link>
              <Link to="/commercial-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-foreground/80 font-medium py-1">Commercial Locksmith</Link>
              <a href="tel:4434993999" className="flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full font-semibold text-sm w-fit mt-1">
                <Phone className="w-4 h-4" /> 443 499 3999
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}