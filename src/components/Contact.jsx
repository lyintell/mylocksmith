import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LOGO_PATH } from '@/lib/siteAssets';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-3 mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're available around the clock. Give us a call or shoot us an email.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg mb-10 bg-white">
              <img src={SITE_LOGO_PATH} alt="MY LOCKSMITH BALTIMORE" className="w-full h-full object-contain p-2" />
            </div>

            <div className="space-y-6">
              <a href="tel:4434993999" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Phone</p>
                  <p className="text-xl font-bold text-foreground">443 499 3999</p>
                </div>
              </a>

              <a href="mailto:mylocksmith410@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-all">
                  <Mail className="w-5 h-5 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                  <p className="text-lg font-semibold text-foreground">mylocksmith410@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Service Area</p>
                  <p className="text-lg font-semibold text-foreground">Baltimore, MD & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Hours</p>
                  <p className="text-lg font-semibold text-foreground">24 Hours a Day, 7 Days a Week</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 rounded-3xl p-10 text-white text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black mb-3">Need Help Now?</h3>
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              Don't wait — our locksmiths are standing by. One call gets you back on track.
            </p>
            <a
              href="tel:4434993999"
              className="block bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/40 hover:scale-105 mb-4"
            >
              📞 Call 443 499 3999
            </a>
            <a
              href="mailto:mylocksmith410@gmail.com"
              className="block border border-white/20 text-white/70 hover:text-white hover:border-white/50 py-3 px-8 rounded-full font-medium text-sm transition-all"
            >
              ✉️ Send Us an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}