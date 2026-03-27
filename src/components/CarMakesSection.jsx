import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const makes = [
  { name: 'Toyota', models: 'Camry, Corolla, RAV4, Tacoma, Tundra, Prius, Highlander, 4Runner, Sienna, Sequoia, Avalon, Venza, C-HR, GR86' },
  { name: 'Honda', models: 'Civic, Accord, CR-V, Pilot, Odyssey, HR-V, Passport, Ridgeline, Fit, Insight, Element' },
  { name: 'Ford', models: 'F-150, F-250, F-350, Mustang, Explorer, Escape, Edge, Bronco, Expedition, Ranger, Focus, Fusion, Taurus' },
  { name: 'Chevrolet', models: 'Silverado, Tahoe, Suburban, Equinox, Malibu, Impala, Traverse, Colorado, Blazer, Camaro' },
  { name: 'GMC', models: 'Sierra, Yukon, Terrain, Acadia, Canyon, Denali, Savana' },
  { name: 'Nissan', models: 'Altima, Sentra, Maxima, Rogue, Pathfinder, Frontier, Titan, Murano, Armada, Kicks, Versa, 370Z' },
  { name: 'Hyundai', models: 'Elantra, Sonata, Tucson, Santa Fe, Palisade, Kona, Ioniq, Veloster, Accent, Genesis' },
  { name: 'Kia', models: 'Optima, Sorento, Sportage, Telluride, Soul, Forte, Stinger, Carnival, Niro, EV6' },
  { name: 'Jeep', models: 'Grand Cherokee, Wrangler, Cherokee, Compass, Renegade, Gladiator, Liberty' },
  { name: 'Dodge', models: 'Charger, Challenger, Durango, Grand Caravan, Journey, Ram 1500, Ram 2500, Dart' },
  { name: 'Chrysler', models: 'Pacifica, 300, Town & Country, Sebring, 200, Aspen' },
  { name: 'Ram', models: 'Ram 1500, Ram 2500, Ram 3500, ProMaster, ProMaster City' },
  { name: 'Acura', models: 'TLX, MDX, RDX, ILX, RSX, TSX, RL, TL, Integra' },
  { name: 'Lexus', models: 'ES, IS, GS, LS, RX, NX, GX, LX, UX, RC, LC' },
  { name: 'Infiniti', models: 'Q50, Q60, Q70, QX50, QX60, QX80, G35, G37, FX35, FX45' },
  { name: 'Subaru', models: 'Outback, Forester, Impreza, Legacy, WRX, Crosstrek, Ascent, BRZ' },
  { name: 'Mazda', models: 'Mazda3, Mazda6, CX-5, CX-9, CX-3, MX-5 Miata, CX-30, CX-50' },
  { name: 'Mitsubishi', models: 'Outlander, Eclipse Cross, Galant, Lancer, Mirage, Montero' },
  { name: 'Volkswagen', models: 'Jetta, Passat, Tiguan, Atlas, Golf, GTI, Beetle, CC, Touareg' },
  { name: 'Lincoln', models: 'Navigator, Aviator, Corsair, Nautilus, MKZ, Continental, MKC, Town Car' },
  { name: 'Cadillac', models: 'Escalade, CT5, CT4, XT5, XT6, ATS, CTS, SRX, DTS, XTS' },
  { name: 'Buick', models: 'Enclave, Encore, Envision, LaCrosse, Verano, Regal, Lucerne' },
  { name: 'Volvo', models: 'XC90, XC60, XC40, S60, S90, V60, V90' },
  { name: 'Saab', models: '9-3, 9-5, 9-7X, 9-2X' },
  { name: 'Hummer', models: 'H2, H3' },
  { name: 'Isuzu', models: 'Trooper, Rodeo, Axiom, Amigo, Ascender' },
  { name: 'Mercury', models: 'Grand Marquis, Mariner, Milan, Montego, Sable, Villager' },
  { name: 'Pontiac', models: 'Grand Prix, Bonneville, Firebird, GTO, Montana, Vibe' },
  { name: 'Saturn', models: 'Vue, Ion, Aura, Outlook, Sky, Relay' },
  { name: 'Oldsmobile', models: 'Alero, Aurora, Bravada, Intrigue, Silhouette' },
  { name: 'Smart Car', models: 'ForTwo, ForFour' },
  { name: 'Suzuki', models: 'Grand Vitara, SX4, Equator, Reno, Aerio, Forenza' },
];

export default function CarMakesSection() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">All Vehicles Covered</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-3">
            Car Key Replacement & Programming — Every Make & Model in Baltimore
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base leading-relaxed">
            Whether you drive a Toyota Camry, Honda Accord, Ford F-150, Chevrolet Silverado, or any other vehicle — our Baltimore automotive locksmiths are trained and equipped to cut, program, and replace keys for virtually every car, truck, van, and SUV on the road. We come to you anywhere in Baltimore, Towson, Annapolis, Columbia, Glen Burnie, and all surrounding areas — no tow truck needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-14">
          {makes.map((make, i) => (
            <motion.div
              key={make.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 rounded-xl p-4 transition-all"
            >
              <h3 className="font-bold text-white text-sm mb-1">{make.name} Locksmith Baltimore</h3>
              <p className="text-white/40 text-xs leading-relaxed">{make.models}</p>
            </motion.div>
          ))}
        </div>

        {/* Services breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-black mb-4 text-white">Toyota Car Key Replacement Baltimore</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Toyota keys are among the most common vehicles we service in Baltimore. From Toyota Corolla key duplication to Toyota Camry transponder key programming, Prius smart key replacement, Tacoma key fob programming, and RAV4 push-to-start proximity key — we handle every Toyota model fast and affordably.
            </p>
            <ul className="text-white/50 text-xs space-y-1">
              {['Toyota Camry key replacement', 'Toyota Corolla transponder key', 'Toyota RAV4 smart key programming', 'Toyota Tacoma key fob replacement', 'Toyota Prius proximity key', 'Toyota Highlander key duplication', 'Toyota 4Runner lost key replacement', 'Toyota Tundra key programming Baltimore'].map(s => (
                <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-black mb-4 text-white">Honda Car Key Replacement Baltimore</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Honda vehicles require specialized transponder programming equipment. We carry the right tools for every Honda model — from simple Honda Civic key duplication to Honda Accord smart key programming, CR-V proximity remote replacement, and Honda Odyssey keyless entry repair.
            </p>
            <ul className="text-white/50 text-xs space-y-1">
              {['Honda Civic key replacement', 'Honda Accord transponder key', 'Honda CR-V smart key fob', 'Honda Pilot key programming Baltimore', 'Honda Odyssey keyless entry', 'Honda HR-V key duplication', 'Honda Ridgeline lost key service', 'Honda key fob battery & reprogramming'].map(s => (
                <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-black mb-4 text-white">Ford & Chevrolet Key Replacement Baltimore</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              American trucks and SUVs are our specialty. We program Ford F-150 transponder keys, Ford Explorer smart keys, Chevy Silverado key fobs, Chevy Tahoe push-to-start keys, and more — all at your location across Baltimore, Dundalk, Essex, and surrounding areas.
            </p>
            <ul className="text-white/50 text-xs space-y-1">
              {['Ford F-150 key replacement Baltimore', 'Ford Explorer transponder key', 'Chevrolet Silverado key fob', 'Chevy Tahoe smart key programming', 'Ford Mustang key duplication', 'GMC Sierra lost key replacement', 'Ford Escape keyless entry fob', 'Chevy Suburban ignition key'].map(s => (
                <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-black mb-4 text-white">Hyundai, Kia & Nissan Key Replacement Baltimore</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Korean and Japanese vehicles have increasingly sophisticated key systems. We specialize in Hyundai Elantra smart key programming, Kia Sorento transponder replacement, Nissan Altima push-to-start key service, and Nissan Rogue proximity remote — all done on-site, no dealer visit required.
            </p>
            <ul className="text-white/50 text-xs space-y-1">
              {['Hyundai Elantra key replacement', 'Kia Sorento transponder key', 'Nissan Altima smart key Baltimore', 'Kia Optima key fob programming', 'Hyundai Sonata lost key service', 'Nissan Rogue keyless remote', 'Kia Soul key duplication', 'Nissan Frontier key replacement'].map(s => (
                <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/50 text-sm mb-4">Don't see your vehicle? We almost certainly service it — call us to confirm.</p>
          <a
            href="tel:4434993999"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
          >
            <Phone className="w-5 h-5" /> Call Now: 443 499 3999
          </a>
        </div>
      </div>
    </section>
  );
}