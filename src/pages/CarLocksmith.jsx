import { Helmet } from 'react-helmet-async';
import { Phone, Clock, Key, Car, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import MobileEmergencyCTA from '../components/MobileEmergencyCTA';
import TextMeButton from '../components/TextMeButton';
import ServiceAreaMap from '../components/ServiceAreaMap';
import ServiceReviews from '../components/ServiceReviews';
import CarMakesSection from '../components/CarMakesSection';
import ServiceAreasSection from '../components/ServiceAreasSection';
import { CAR_GALLERY_PATHS } from '@/lib/siteAssets';

const images = [
{ url: CAR_GALLERY_PATHS[0], caption: 'Car key programming Baltimore — transponder key cut and programmed on-site, serving Baltimore, Towson & Glen Burnie.' },
{ url: CAR_GALLERY_PATHS[1], caption: 'Automotive locksmith Baltimore — on-site key cutting for all makes and models in Catonsville, Dundalk & Essex.' },
{ url: CAR_GALLERY_PATHS[2], caption: 'Ford car key replacement Baltimore — all keys lost, programming complete, serving Columbia, Ellicott City & Laurel.' },
{ url: CAR_GALLERY_PATHS[3], caption: 'Ignition repair Baltimore — ignition lock cylinder removal and replacement for all vehicles in Annapolis & Severna Park.' },
{ url: CAR_GALLERY_PATHS[4], caption: 'MY LOCKSMITH BALTIMORE mobile locksmith van — 24/7 car locksmith serving Pasadena, Parkville & Middle River.' },
{ url: CAR_GALLERY_PATHS[5], caption: 'Cadillac smart key programming Baltimore — push-to-start key fob replacement, serving Pikesville, Owings Mills & Reisterstown.' },
{ url: CAR_GALLERY_PATHS[6], caption: 'Professional car key cutting machine — precision automotive key duplication for all makes in Baltimore, Towson & Linthicum.' },
{ url: CAR_GALLERY_PATHS[7], caption: 'Autel key programmer and VVDI tool — advanced transponder key programming equipment used by MY LOCKSMITH BALTIMORE.' }];


const highlights = [
{ icon: Clock, text: '15–30 Min Response' },
{ icon: Key, text: 'All Makes & Models' },
{ icon: Car, text: 'On-Site Key Programming' },
{ icon: Shield, text: 'Licensed & Insured' }];


const services = [
'24/7 Emergency Car Lockout Baltimore',
'Car Key Replacement Near Me',
'Transponder Key Programming (All Makes)',
'Smart Key & Proximity Key Programming',
'Key Fob Replacement & Reprogramming',
'Broken Key Extraction from Ignition',
'Ignition Repair & Replacement',
'Laser Cut Key Duplication',
'Locked Keys in Trunk',
'Spare Car Key Cutting',
'Push-to-Start / Keyless Entry Keys',
'Car Door Handle & Lock Repair',
'Truck & SUV Key Programming',
'Key Fob Battery Replacement',
'Toyota Key Replacement Baltimore',
'Honda Car Key Programming Baltimore',
'Ford & Chevy Key Replacement',
'Hyundai / Kia Transponder Keys',
'Remote Control Repair & Replacement',
'Car Remote Reprogramming',
'Ignition Lock Cylinder Replacement',
'Duplicate Car Keys — All Models',
'Key Shell Replacement',
'Chip Key Programming Baltimore'];


export default function CarLocksmith() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Car Locksmith Baltimore | 24 Hour Automotive Locksmith | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="Need a car locksmith in Baltimore? MY LOCKSMITH BALTIMORE provides 24/7 emergency car lockout, car key replacement, transponder key programming, and ignition repair. Fast 15–30 min response in Baltimore, Towson, Annapolis, Glen Burnie & more. Call 443-499-3999." />
        <meta name="keywords" content="car locksmith Baltimore, car key replacement Baltimore, emergency car lockout Baltimore, automotive locksmith Baltimore, car key programming Baltimore, 24 hour car locksmith, lost car keys Baltimore, car locksmith near me, transponder key Baltimore, ignition repair Baltimore, car locksmith Annapolis, car locksmith Towson, car locksmith Glen Burnie, car locksmith Columbia MD" />
        <link rel="canonical" href="https://mylocksmith.com/car-locksmith-baltimore" />
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Car Locksmith Baltimore",
            "provider": { "@type": "Locksmith", "name": "MY LOCKSMITH BALTIMORE", "telephone": "+14434993999", "url": "https://mylocksmith.com", "address": { "@type": "PostalAddress", "addressLocality": "Baltimore", "addressRegion": "MD", "addressCountry": "US" } },
            "areaServed": ["Baltimore MD", "Towson MD", "Annapolis MD", "Glen Burnie MD", "Columbia MD", "Ellicott City MD", "Catonsville MD", "Dundalk MD", "Laurel MD", "Severna Park MD", "Pikesville MD", "Canton Baltimore", "Federal Hill Baltimore"],
            "description": "24/7 emergency car lockout, car key replacement, transponder key programming, and ignition repair in Baltimore MD and surrounding areas. Fast 15-30 min response.",
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceRange": "$$" }
          })}</script>
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mylocksmith.com" },
            { "@type": "ListItem", "position": 2, "name": "Car Locksmith Baltimore", "item": "https://mylocksmith.com/car-locksmith-baltimore" }]

          })}</script>
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              24/7 Available — Baltimore & Surrounding Areas
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Car Locksmith <span className="text-primary">Baltimore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light mb-6">
              Emergency Car Lockout · Car Key Replacement · Key Programming · Ignition Repair
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
              Locked out of your car in Baltimore? Lost all your keys? Need a new transponder key programmed? Our professional automotive locksmith team arrives in <strong className="text-white">15–30 minutes</strong>, anywhere in Baltimore, Towson, Annapolis, Glen Burnie, Columbia, Ellicott City, Catonsville, and all surrounding areas — <strong className="text-white">24 hours a day, 7 days a week</strong>, including holidays.
            </p>
            <p className="text-white/50 text-sm mb-10 italic">
              "We Know, Stuff Happens." — Always on call, always on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              

              
              

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, text }, i) =>
          <motion.div key={text} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-sm font-semibold text-foreground">{text}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-4 text-center">Car Key Replacement & Lockout Services in Baltimore</h2>
          <p className="text-muted-foreground text-center mb-10">
            We provide comprehensive automotive locksmith services for all makes and models throughout Baltimore, Annapolis, Columbia, Towson, Glen Burnie, Ellicott City, Catonsville, and all of Maryland.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) =>
            <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border shadow-sm">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-3 text-center">Our Automotive Locksmith Work in Baltimore & Surrounding Areas</h2>
          <p className="text-muted-foreground text-center mb-12">Real jobs across Baltimore, Towson, Annapolis, Glen Burnie, Columbia, Dundalk, Catonsville, Ellicott City & more.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map(({ url, caption }, i) =>
            <motion.figure key={url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-2xl overflow-hidden shadow-md border border-border bg-gray-50">
                <img src={url} alt={caption} className="w-full h-52 object-cover" loading="lazy" />
                <figcaption className="p-3 text-xs text-muted-foreground leading-relaxed">{caption}</figcaption>
              </motion.figure>
            )}
          </div>
        </div>
      </section>

      <CarMakesSection />
      <ServiceAreasSection />
      <ServiceReviews />
      <ServiceAreaMap />

      {/* CTA Banner */}
      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Need a Car Locksmith in Baltimore Right Now?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">We're available 24 hours a day across Baltimore, Annapolis, Towson, Columbia & all surrounding areas. No extra charge for nights or weekends.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="sms:4434313795" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            💬 Text Us: 443 431 3795
          </a>
        </div>
      </section>

      <Footer />
      <MobileEmergencyCTA />
      <TextMeButton />
    </div>);

}