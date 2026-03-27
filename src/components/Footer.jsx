import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_LOGO_PATH } from '@/lib/siteAssets';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow mb-4 bg-white">
              <img src={SITE_LOGO_PATH} alt="MY LOCKSMITH BALTIMORE" className="w-full h-full object-contain p-1" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Baltimore's trusted locksmith for automotive, residential, and commercial needs — available 24/7.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {['Emergency Lockout', 'Automotive Keys', 'Smart Lock Installation', 'Lock Repair & Replacement', 'Rekeying & Master Keys'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:4434993999" className="flex items-center gap-2 text-white/70 hover:text-primary text-sm transition-colors">
                  <Phone className="w-4 h-4" /> 443 499 3999
                </a>
              </li>
              <li>
                <a href="mailto:mylocksmith410@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-primary text-sm transition-colors">
                  <Mail className="w-4 h-4" /> mylocksmith410@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" /> Baltimore, MD
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} MY LOCKSMITH BALTIMORE. All rights reserved.</p>
          <p>Baltimore, MD • Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}