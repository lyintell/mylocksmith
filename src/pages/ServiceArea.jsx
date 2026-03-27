import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Car, Home, Building2, Key, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePageNavbar from '../components/ServicePageNavbar';
import Footer from '../components/Footer';
import TextMeButton from '../components/TextMeButton';

const serviceAreas = [
  { city: 'Baltimore City', zip: '21201–21231' },
  { city: 'Towson', zip: '21204' },
  { city: 'Columbia', zip: '21044–21046' },
  { city: 'Glen Burnie', zip: '21060–21061' },
  { city: 'Dundalk', zip: '21222' },
  { city: 'Ellicott City', zip: '21042–21043' },
  { city: 'Catonsville', zip: '21228' },
  { city: 'Essex', zip: '21221' },
  { city: 'Pasadena', zip: '21122' },
  { city: 'Parkville', zip: '21234' },
  { city: 'Middle River', zip: '21220' },
  { city: 'Rosedale', zip: '21237' },
  { city: 'Annapolis', zip: '21401–21403' },
  { city: 'Severna Park', zip: '21146' },
  { city: 'Arnold', zip: '21012' },
  { city: 'Crofton', zip: '21114' },
  { city: 'Davidsonville', zip: '21035' },
  { city: 'Edgewater', zip: '21037' },
  { city: 'Clarksville', zip: '21029' },
  { city: 'Fulton', zip: '20759' },
  { city: 'Elkridge', zip: '21075' },
  { city: 'Brooklyn Park', zip: '21225' },
  { city: 'Severn', zip: '21144' },
  { city: 'Linthicum Heights', zip: '21090' },
  { city: 'Hanover', zip: '21076' },
  { city: 'Laurel', zip: '20707–20708' },
  { city: 'Jessup', zip: '20794' },
  { city: 'Halethorpe', zip: '21227' },
  { city: 'Arbutus', zip: '21227' },
];

const allServices = [
  { icon: Car, color: 'text-red-600', bg: 'bg-red-50', category: 'Automotive', items: [
    '24/7 Emergency Car Lockout',
    'Car Key Replacement & Duplication',
    'Transponder Key Programming',
    'Smart Key & Key Fob Programming',
    'Broken Key Extraction from Ignition',
    'Ignition Repair & Replacement',
    'Locked Keys in Trunk',
    'Motorcycle Key Replacement',
    'Push-to-Start Key Programming',
    'Car Door Handle & Lock Repair',
  ]},
  { icon: Home, color: 'text-blue-600', bg: 'bg-blue-50', category: 'Residential', items: [
    '24/7 Emergency Home Lockout',
    'House Lock Change & Replacement',
    'Door Knob & Door Handle Replacement',
    'Deadbolt Installation & Repair',
    'Residential Lock Rekeying',
    'Smart Lock & Keypad Installation',
    'Safe Opening & Combination Change',
    'Storage Unit Lockout',
    'Master Key System for Homes',
    'Post Break-In Lock Replacement',
  ]},
  { icon: Building2, color: 'text-gray-700', bg: 'bg-gray-100', category: 'Commercial', items: [
    '24/7 Emergency Business Lockout',
    'Commercial Door Knob & Handle Replacement',
    'Master Key System Installation',
    'Commercial Lock Rekeying',
    'High-Security Deadbolt Installation',
    'Panic Bar & Exit Device Installation',
    'Safe Opening & Combination Change',
    'Storage Unit Lockout Service',
    'Keypad Door Lock Installation',
    'Mailbox & Cabinet Lock Repair',
  ]},
];

export default function ServiceArea() {
  return (
    <div className="font-inter">
      <Helmet>
        <title>Locksmith Service Area | Baltimore MD & Surrounding Areas | MY LOCKSMITH BALTIMORE</title>
        <meta name="description" content="MY LOCKSMITH BALTIMORE serves Baltimore and all surrounding areas including Towson, Annapolis, Glen Burnie, Columbia, Ellicott City, Catonsville, Dundalk, Laurel, Severna Park & more. 24/7 locksmith services. Call 443-499-3999." />
        <meta name="keywords" content="locksmith service area Baltimore, locksmith near me Maryland, locksmith Annapolis, locksmith Towson, locksmith Glen Burnie, locksmith Columbia MD, locksmith Ellicott City, locksmith Catonsville, locksmith Dundalk, locksmith Laurel MD, locksmith Severna Park" />
        <link rel="canonical" href="https://mylocksmith.com/service-area" />
      </Helmet>

      <ServicePageNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Baltimore Metro Area
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Our <span className="text-primary">Service Area</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              MY LOCKSMITH BALTIMORE covers Baltimore City and all surrounding counties — available <strong className="text-white">24/7</strong> for automotive, residential, and commercial locksmith services. Find your area below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-black text-foreground text-center mb-6">Baltimore & Surrounding Coverage Map</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              title="MY LOCKSMITH BALTIMORE Service Area — Baltimore MD and Surrounding Counties"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196375!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            We cover <strong>Baltimore City</strong>, <strong>Anne Arundel County</strong>, <strong>Howard County</strong>, and <strong>Baltimore County</strong> — and beyond.
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Coverage</span>
            <h2 className="text-3xl font-black text-foreground mt-2 mb-2">Cities & Zip Codes We Serve</h2>
            <p className="text-muted-foreground">Don't see your city? Call us — we likely cover your area too.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{area.city}</p>
                  <p className="text-muted-foreground text-xs">ZIP: {area.zip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">What We Do</span>
            <h2 className="text-3xl font-black text-foreground mt-2 mb-2">Services Available in All Areas</h2>
            <p className="text-muted-foreground">Every service — available 24/7 wherever you are in our coverage zone.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {allServices.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-border"
              >
                <div className={`w-12 h-12 rounded-2xl ${cat.bg} flex items-center justify-center mb-4`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <h3 className={`text-lg font-black mb-4 ${cat.color}`}>{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Key className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-gray-950 py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Clock, label: '24/7 Available' },
            { icon: MapPin, label: '30+ Areas Covered' },
            { icon: Shield, label: 'Licensed & Insured' },
            { icon: Key, label: 'All Lock Types' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-white text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-white text-center px-6">
        <h2 className="text-3xl font-black mb-3">Not Sure If We Cover Your Area?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Just give us a call — we're available 24/7 and we probably do! No extra charge for nights or weekends.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:4434993999" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            <Phone className="w-6 h-6" /> 443 499 3999
          </a>
          <a href="sms:4434313795" className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            🔑 Text Us
          </a>
        </div>
      </section>

      <Footer />
      <TextMeButton />
    </div>
  );
}