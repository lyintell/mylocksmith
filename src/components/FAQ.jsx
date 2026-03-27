import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What car makes and models do you service in Baltimore?',
    a: 'We service virtually every vehicle on the road — Toyota, Honda, Ford, Chevrolet, GMC, Nissan, Hyundai, Kia, Jeep, Dodge, Chrysler, Acura, Lexus, Infiniti, Subaru, Mazda, Mitsubishi, Volkswagen, Lincoln, Cadillac, Buick, Jaguar, Land Rover, Volvo, Mini Cooper, Isuzu, Mercury, Pontiac, Saturn, Tesla, and many more. Whether you need a Toyota Camry key replacement, Honda Civic transponder programming, Ford F-150 smart key, or Chevy Silverado key fob — we come to you anywhere in Baltimore.',
  },
  {
    q: 'Can you program a transponder key without the original?',
    a: 'Yes! Even if you\'ve lost all your keys, we can cut and program a brand-new transponder key for most vehicles. We use professional-grade automotive key programming equipment. We can program Toyota transponder keys, Honda chip keys, Ford PATS keys, Hyundai/Kia smart keys, and many more — all on-site at your location in Baltimore, Towson, Annapolis, or wherever you are.',
  },
  {
    q: 'How fast can you get to me in Baltimore?',
    a: 'We typically arrive within 15–30 minutes anywhere in the Baltimore area — including Canton, Federal Hill, Hampden, Fells Point, Pikesville, Towson, Annapolis, and all surrounding areas. Our technicians are always on standby, 24 hours a day, 7 days a week, including weekends and holidays.',
  },
  {
    q: 'Do you offer 24/7 emergency locksmith services in Baltimore?',
    a: 'Absolutely. We never close. Whether it\'s 2am on a Sunday or Christmas morning, our team is ready to help with car lockouts, home lockouts, and commercial emergencies. Call us anytime at 443-499-3999.',
  },
  {
    q: 'Can you make a new car key if I lost all my keys?',
    a: 'Yes! We offer automotive key programming and car key duplication for most makes and models — even if you have no working key. We can cut and program a new transponder key, smart key, or key fob on-site anywhere in Baltimore and surrounding areas.',
  },
  {
    q: 'Are you a licensed and insured locksmith in Maryland?',
    a: 'Yes, MY LOCKSMITH BALTIMORE is fully licensed and insured in the state of Maryland. We are a legitimate, verified locksmith business — not a call center or scam operation. You can trust us to work on your vehicle, home, or business with complete peace of mind.',
  },
  {
    q: 'How much does a car lockout or home lockout cost in Baltimore?',
    a: 'Pricing depends on the type of service and time of day. We always give you a clear, upfront quote before starting any work — no hidden fees, no bait-and-switch pricing. Call 443-499-3999 for a free estimate.',
  },
  {
    q: 'Can you install smart locks and keypad door locks?',
    a: 'Yes! We install, program, and service a wide variety of smart locks, electronic keypad systems, and keyless entry locks for both residential and commercial properties across Baltimore, Towson, Annapolis, Columbia, and all surrounding areas.',
  },
  {
    q: 'What is rekeying and when should I get it done?',
    a: 'Rekeying changes the internal pins of your lock so old keys no longer work — without replacing the entire lock hardware. It\'s ideal when you\'ve just moved into a new home, lost a key, ended a tenancy, or want to improve security affordably. We rekey all lock brands same-day across Baltimore.',
  },
  {
    q: 'Do you service all Baltimore neighborhoods and surrounding counties?',
    a: 'Yes — we cover all of Baltimore City including Canton, Federal Hill, Hampden, Fells Point, Roland Park, Pikesville, Mount Vernon, and all neighborhoods, plus Anne Arundel County, Howard County, and Baltimore County. Give us a call and we\'ll get someone to you fast.',
  },
  {
    q: 'Can you open a safe or storage unit?',
    a: 'Yes! We provide safe opening, safe combination changes, and storage unit lockout services throughout Baltimore and surrounding areas. We open all types of residential safes, commercial safes, and storage units — call us 24/7.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-primary/40 shadow-md shadow-primary/10' : 'border-border hover:border-primary/20'}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-foreground text-base pr-2">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-muted-foreground text-sm leading-relaxed bg-white border-t border-border/50">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground mt-3 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Can't find your answer? Just give us a call — we're always happy to help.
          </motion.p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center bg-gray-950 rounded-3xl p-8"
        >
          <p className="text-white font-bold text-xl mb-2">Still have questions?</p>
          <p className="text-white/50 text-sm mb-6">Our team is available around the clock to help you.</p>
          <a
            href="tel:4434993999"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
          >
            📞 Call 443 499 3999
          </a>
        </motion.div>
      </div>
    </section>
  );
}