import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Latasha Johnson',
    location: 'Baltimore, MD',
    stars: 5,
    text: 'Amazing service! I was locked out of my car late at night and they came within 20 minutes. Very professional and affordable. Highly recommend MY LOCKSMITH BALTIMORE!',
  },
  {
    name: 'David Kim',
    location: 'Baltimore, MD',
    stars: 5,
    text: 'Lost all my car keys and they programmed a brand new one on the spot. Saved me a trip to the dealer and hundreds of dollars. Will definitely use again!',
  },
  {
    name: 'Maria Gonzalez',
    location: 'Baltimore, MD',
    stars: 5,
    text: 'Quick response, fair pricing, and very knowledgeable. Had my smart lock installed perfectly. I feel much safer now. Thank you MY LOCKSMITH BALTIMORE!',
  },
  {
    name: 'Robert Thompson',
    location: 'Baltimore, MD',
    stars: 5,
    text: 'Called at 2am when I locked myself out. They were at my door in under 30 minutes. Friendly, fast, and no hidden fees. 5 stars!',
  },
  {
    name: 'Jennifer Williams',
    location: 'Towson, MD',
    stars: 5,
    text: 'Needed a full rekey after moving into my new home. They came same day and did all the locks quickly. Great price and super professional!',
  },
  {
    name: 'Marcus Brown',
    location: 'Catonsville, MD',
    stars: 5,
    text: 'The best locksmith in Baltimore! Fixed my commercial door lock in no time. The technician was courteous, skilled, and got the job done right the first time.',
  },
  {
    name: 'Ashley Davis',
    location: 'Pikesville, MD',
    stars: 5,
    text: 'I was in a panic with my kids in the car and keys locked inside. MY LOCKSMITH BALTIMORE arrived in 15 minutes and opened it without any damage. Absolute lifesavers!',
  },
  {
    name: 'Kevin Patel',
    location: 'Ellicott City, MD',
    stars: 5,
    text: 'Highly skilled and professional. They reprogrammed my transponder key on the spot. Way cheaper than the dealership and faster too. 100% recommended!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(0,85%,95%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(214,100%,95%) 0%, transparent 50%)'
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            Happy Customers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground mt-3 mb-4"
          >
            What Baltimore Says About Us
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all relative group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3 group-hover:text-primary/40 transition-colors" />
              <div className="flex gap-1 mb-3">
                {Array(r.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground text-sm">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}