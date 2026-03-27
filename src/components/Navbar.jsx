import { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SITE_LOGO_PATH } from '@/lib/siteAssets';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (label) => {
    setMenuOpen(false);
    if (label === 'Why Us') { navigate('/why-us'); return; }
    if (label === 'FAQ') { navigate('/faq'); return; }
    if (label === 'Contact') { navigate('/contact'); return; }
    // Services scrolls on home page
    if (location.pathname === '/') {
      document.getElementById(label.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: label.toLowerCase().replace(' ', '-') } });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Clickable Logo → calls business */}
        <a href="tel:4434993999" className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 shadow-md bg-white hover:border-primary transition-all">
          <img src={SITE_LOGO_PATH} alt="MY LOCKSMITH BALTIMORE Locksmith" className="w-full h-full object-contain p-1" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {['Services', 'Why Us', 'FAQ', 'Contact'].map(link => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm tracking-wide"
            >
              {link}
            </button>
          ))}
          <Link
            to="/service-area"
            className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm tracking-wide flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            Service Area
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="tel:4434993999"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
        >
          <Phone className="w-4 h-4" />
          443 499 3999
        </a>

        {/* Mobile menu toggle */}
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
            <div className="px-6 py-4 flex flex-col gap-4">
              <button onClick={() => handleNavClick('Services')} className="text-left text-foreground/80 font-bold py-1 text-base">Services</button>
              <Link to="/car-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ Automotive Locksmith</Link>
              <Link to="/house-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ Residential Locksmith</Link>
              <Link to="/commercial-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ Commercial Locksmith</Link>
              <Link to="/emergency-locksmith-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ 24/7 Emergency Locksmith</Link>
              <Link to="/car-key-replacement-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ Car Key Replacement</Link>
              <Link to="/lock-rekey-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ Lock Rekeying</Link>
              <Link to="/smart-lock-installation-baltimore" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 pl-3 text-sm text-primary">→ Smart Lock Installation</Link>
              <div className="border-t border-border pt-2 mt-1 flex flex-col gap-3">
                <button onClick={() => handleNavClick('Why Us')} className="text-left text-foreground/80 font-bold py-1 text-base flex items-center gap-2">⭐ Why Choose Us</button>
                <button onClick={() => handleNavClick('FAQ')} className="text-left text-foreground/80 font-bold py-1 text-base flex items-center gap-2">❓ FAQ</button>
                <button onClick={() => handleNavClick('Contact')} className="text-left text-foreground/80 font-bold py-1 text-base flex items-center gap-2">📞 Contact Us</button>
              </div>
              <Link to="/service-area" onClick={() => setMenuOpen(false)} className="text-left text-foreground/80 font-medium py-1 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" /> Service Area
              </Link>
              <a href="tel:4434993999" className="flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full font-semibold text-sm w-fit">
                <Phone className="w-4 h-4" /> 443 499 3999
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}