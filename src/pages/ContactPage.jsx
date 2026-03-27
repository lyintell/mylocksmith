import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';
import { SITE_LOGO_PATH } from '@/lib/siteAssets';

const serviceAreas = [
  'Baltimore City', 'Towson', 'Columbia', 'Glen Burnie', 'Dundalk',
  'Ellicott City', 'Catonsville', 'Annapolis', 'Pasadena', 'Parkville',
  'Essex', 'Middle River', 'Rosedale', 'Severna Park', 'Laurel',
  'Jessup', 'Elkridge', 'Brooklyn Park', 'Halethorpe', 'Arbutus','Montreal',
];

export default function ContactPage() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Contact MY LOCKSMITH BALTIMORE | 24/7 Locksmith | Call 443-499-3999</title>
        <meta name="description" content="Contact MY LOCKSMITH BALTIMORE for 24/7 emergency locksmith services. Car lockouts, key programming, home lockouts, smart lock installation across Baltimore MD. Call 443-499-3999 or text 443-431-3795." />
        <meta name="keywords" content="contact locksmith Baltimore, locksmith phone number Baltimore, locksmith near me Baltimore, emergency locksmith Baltimore MD, call locksmith Baltimore, Baltimore locksmith 443 499 3999" />
        <link rel="canonical" href="https://mylocksmith.com/contact" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Locksmith",
          "name": "MY LOCKSMITH BALTIMORE",
          "telephone": "+14434993999",
          "email": "mylocksmith410@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Baltimore",
            "addressRegion": "MD",
            "addressCountry": "US"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "$$",
          "areaServed": "Baltimore, MD and surrounding areas"
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
              Available 24/7 — Baltimore MD
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Contact <span className="text-primary">MY LOCKSMITH BALTIMORE</span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              Baltimore's trusted locksmith — one call away. Whether it's an emergency lockout or a scheduled service, we're always ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg mb-8 bg-white">
                <img src={SITE_LOGO_PATH} alt="MY LOCKSMITH BALTIMORE" className="w-full h-full object-contain p-2" />
              </div>
              <h2 className="text-2xl font-black text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <a href="tel:4434993999" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Call Us — 24/7</p>
                    <p className="text-2xl font-black text-foreground">443 499 3999</p>
                    <p className="text-xs text-muted-foreground">Emergency locksmith Baltimore — fastest response</p>
                  </div>
                </a>

                <a href="sms:4434313795" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-all">
                    <MessageCircle className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Text Us</p>
                    <p className="text-2xl font-black text-foreground">443 431 3795</p>
                    <p className="text-xs text-muted-foreground">Text us your location & issue — we'll respond fast</p>
                  </div>
                </a>

                <a href="mailto:mylocksmith410@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-all">
                    <Mail className="w-6 h-6 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                    <p className="text-base font-semibold text-foreground">mylocksmith410@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Hours</p>
                    <p className="text-base font-semibold text-foreground">24 Hours a Day, 7 Days a Week</p>
                    <p className="text-xs text-muted-foreground">Including holidays & weekends</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Service Area</p>
                    <p className="text-base font-semibold text-foreground">Baltimore, MD & All Surrounding Areas</p>
                    <p className="text-xs text-muted-foreground">Baltimore City, County, Anne Arundel & Howard County</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: CTA card */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-gray-950 rounded-3xl p-8 text-white mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black mb-2 text-center">Locked Out Right Now?</h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed text-center">
                  Don't wait — our Baltimore locksmith team is standing by 24/7. One call and we'll be there in 15–30 minutes.
                </p>
                <a href="tel:4434993999" className="block bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105 mb-4 text-center">
                  📞 Call 443 499 3999
                </a>
                <a href="sms:4434313795" className="block border border-white/20 text-white/70 hover:text-white hover:border-white/50 py-3 px-8 rounded-full font-medium text-sm transition-all text-center">
                  💬 Text 443 431 3795
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Areas We Serve</h4>
                <div className="flex flex-wrap gap-1.5">
                  {serviceAreas.map(area => (
                    <span key={area} className="text-xs bg-white border border-border rounded-full px-2.5 py-1 text-foreground/70 font-medium">{area}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileEmergencyCTA />
      <TextMeButton />
    </div>
  );
}