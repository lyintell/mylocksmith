import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function ServiceReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Google Reviews</span>
          <h2 className="text-3xl font-black text-foreground mt-2 mb-2">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            <span className="ml-2 text-sm font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground text-sm ml-1">— Google Reviews</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-gray-50 rounded-2xl p-5 border border-border"
            >
              <Quote className="w-6 h-6 text-primary/20 mb-2" />
              <div className="flex gap-0.5 mb-2">
                {Array(r.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/70 text-xs leading-relaxed mb-3">"{r.text}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-bold text-foreground text-xs">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}