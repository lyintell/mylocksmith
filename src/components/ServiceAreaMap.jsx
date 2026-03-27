import { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const areas = [
  'Baltimore City', 'Towson', 'Columbia', 'Glen Burnie', 'Dundalk',
  'Ellicott City', 'Catonsville', 'Essex', 'Pasadena', 'Parkville',
  'Middle River', 'Rosedale', 'Annapolis', 'Severna Park', 'Arnold',
  'Crofton', 'Davidsonville', 'Edgewater', 'Clarksville', 'Fulton',
  'Elkridge', 'Brooklyn Park', 'Severn', 'Linthicum Heights', 'Hanover',
  'Laurel', 'Jessup', 'Halethorpe', 'Arbutus',
];

export default function ServiceAreaMap() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-14 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">Coverage</p>
              <h3 className="text-xl font-black">We Serve Baltimore & All Surrounding Areas</h3>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-8">
                {/* Embedded map */}
                <div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <iframe
                    title="MY LOCKSMITH BALTIMORE Service Area Map — Baltimore MD"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196375!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711000000000"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <p className="text-white/50 text-sm mb-5 text-center">
                  Our licensed locksmiths cover a wide radius around Baltimore — including Anne Arundel, Howard, and Baltimore County.
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {areas.map(area => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1 bg-white/10 hover:bg-primary/30 transition-colors px-3 py-1.5 rounded-full text-xs font-medium text-white/80"
                    >
                      <MapPin className="w-2.5 h-2.5 text-primary" />
                      {area}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-white/40 text-xs mb-3">Not sure if we cover your area? Just call — we probably do!</p>
                  <a
                    href="tel:4434993999"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-all"
                  >
                    <Phone className="w-4 h-4" /> 443 499 3999
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}