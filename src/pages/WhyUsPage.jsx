import { Helmet } from 'react-helmet-async';
import { Clock, Shield, Star, Zap, MapPin, ThumbsUp, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';

const reasons = [
{
  icon: Clock,
  title: '24/7 Emergency Locksmith Baltimore',
  desc: 'Day or night, rain or shine — our certified locksmiths in Baltimore are always on call. We never close, never take holidays off. Real 24-hour locksmith service, 365 days a year.',
  keywords: '24/7 locksmith Baltimore, emergency locksmith Baltimore'
},
{
  icon: Zap,
  title: '15–30 Minute Response Time',
  desc: 'When you\'re locked out, every minute counts. Our Baltimore locksmith team is strategically positioned across the metro area to reach you in under 30 minutes — guaranteed fast response.',
  keywords: 'fast locksmith Baltimore, locksmith near me Baltimore'
},
{
  icon: MapPin,
  title: 'Locally Owned & Operated in Baltimore',
  desc: 'We\'re proud Baltimoreans serving our neighbors. From Federal Hill to Towson, Ellicott City to Annapolis — we know every neighborhood and are never far away.',
  keywords: 'local locksmith Baltimore MD, locksmith Baltimore County'
},
{
  icon: Shield,
  title: 'Maryland Licensed & Fully Insured',
  desc: 'MY LOCKSMITH BALTIMORE is fully licensed by the state of Maryland and carries full liability insurance. You\'re protected on every job — automotive, residential, and commercial.',
  keywords: 'licensed locksmith Baltimore, insured locksmith Maryland'
},
{
  icon: Star,
  title: '5-Star Google Rated Locksmith',
  desc: 'Hundreds of 5-star reviews from real Baltimore customers. Our reputation is built one job at a time. We take pride in every lock, every key, every customer interaction.',
  keywords: 'best locksmith Baltimore, top rated locksmith Baltimore'
},
{
  icon: ThumbsUp,
  title: 'Upfront, Transparent Pricing',
  desc: 'No hidden fees. No bait-and-switch. You get a clear quote before any work begins. Whether it\'s a car lockout, rekey, or smart lock install — you\'ll always know the price upfront.',
  keywords: 'affordable locksmith Baltimore, cheap locksmith Baltimore MD'
}];


const trustPoints = [
'Serving Baltimore City, Baltimore County, Anne Arundel County & Howard County',
'Specialized in automotive key programming for all makes & models',
'Smart lock installation & electronic keypad experts',
'Same-day service for residential & commercial rekeying',
'Transponder key cutting & programming without dealer pricing',
'Emergency lockout response across 30+ Baltimore-area zip codes'];


export default function WhyUsPage() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Why Choose MY LOCKSMITH BALTIMORE | Best Local Locksmith in MD</title>
        <meta name="description" content="MY LOCKSMITH BALTIMORE is Baltimore's top-rated, licensed & insured 24/7 locksmith. Fast 15–30 min response, upfront pricing, 5-star reviews. Serving Baltimore City, Towson, Annapolis, Columbia & all of Maryland." />
        <meta name="keywords" content="best locksmith Baltimore, 24/7 locksmith Baltimore MD, licensed locksmith Maryland, trusted locksmith Baltimore, why choose locksmith Baltimore, fast locksmith Baltimore" />
        <link rel="canonical" href="https://mylocksmith.com/why-us" />
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Baltimore's Most Trusted Locksmith
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Why Choose <span className="text-primary">MY LOCKSMITH BALTIMORE?</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              When you need a locksmith in Baltimore, you deserve fast response, honest pricing, and a licensed professional you can trust. Here's exactly why thousands of Baltimore residents call us first.
            </p>
            

            
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
          { value: '24/7', label: 'Always Available' },
          { value: '500+', label: 'Jobs Completed' },
          { value: '5★', label: 'Google Rating' },
          { value: '<30min', label: 'Avg. Response' }].
          map(({ value, label }, i) =>
          <motion.div key={label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-3xl font-black text-primary mb-1">{value}</div>
              <div className="text-sm text-muted-foreground font-medium">{label}</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-3 text-center">6 Reasons Baltimore Trusts MY LOCKSMITH BALTIMORE</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">From emergency car lockouts in Dundalk to smart lock installs in Columbia — we show up, do the job right, and treat every customer like family.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) =>
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
              
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Trust checklist */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-foreground mb-8 text-center">What You Get With Every MY LOCKSMITH BALTIMORE Job</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {trustPoints.map((p, i) =>
            <motion.div key={p} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground">{p}</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Ready to Experience Baltimore's Best Locksmith?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Call now for an immediate response or text us and we'll get back to you in minutes.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            <Phone className="w-6 h-6" /> 443 499 3999
          </a>
          <a href="sms:4434313795" className="inline-flex items-center gap-3 bg-white/20 border border-white/40 text-white px-10 py-4 rounded-full font-black text-xl hover:bg-white/30 transition-all">
            💬 Text Us
          </a>
        </div>
      </section>

      <Footer />
      <MobileEmergencyCTA />
      <TextMeButton />
    </div>);

}