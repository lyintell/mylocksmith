import { useState, useMemo } from 'react';
import { MapPin, Phone, Search, CheckCircle, Car, Home, Building2, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Complete ZIP code database — every ZIP within ~40 miles of Baltimore downtown (21201)
const ZIP_DATA = [
  // Baltimore City
  { zip: '21201', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Downtown / West Baltimore' },
  { zip: '21202', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Downtown / Inner Harbor' },
  { zip: '21203', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Baltimore PO Boxes' },
  { zip: '21205', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'East Baltimore / Johns Hopkins' },
  { zip: '21206', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Raspeburg / Herring Run' },
  { zip: '21207', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Gwynn Oak / Forest Park' },
  { zip: '21208', city: 'Pikesville', area: 'Baltimore City/County', neighborhood: 'Pikesville / Mt. Washington' },
  { zip: '21209', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Mount Washington / Cheswolde' },
  { zip: '21210', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Roland Park / Guilford' },
  { zip: '21211', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Hampden / Medfield' },
  { zip: '21212', city: 'Baltimore', area: 'Baltimore City / Towson', neighborhood: 'Govans / Northwood' },
  { zip: '21213', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Belair-Edison / Clifton Park' },
  { zip: '21214', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Hamilton / Lauraville' },
  { zip: '21215', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Park Heights / Arlington' },
  { zip: '21216', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Edmondson Village / Forest Park' },
  { zip: '21217', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Druid Hill / Reservoir Hill' },
  { zip: '21218', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Charles Village / Waverly' },
  { zip: '21223', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Pigtown / Carroll Park' },
  { zip: '21224', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Canton / Highlandtown / Fells Point' },
  { zip: '21225', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Brooklyn / Cherry Hill' },
  { zip: '21226', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Curtis Bay / Brooklyn Park' },
  { zip: '21227', city: 'Halethorpe', area: 'Baltimore County', neighborhood: 'Halethorpe / St. Helena' },
  { zip: '21228', city: 'Catonsville', area: 'Baltimore County', neighborhood: 'Catonsville / Arbutus' },
  { zip: '21229', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Irvington / Dickeyville' },
  { zip: '21230', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Federal Hill / South Baltimore' },
  { zip: '21231', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Fells Point / Upper Fells Point' },
  { zip: '21233', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Baltimore PO Boxes' },
  { zip: '21235', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Baltimore Government' },
  { zip: '21239', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Glenham-Belford / Northwood' },
  { zip: '21251', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Morgan State University' },
  { zip: '21263', city: 'Baltimore', area: 'Baltimore City', neighborhood: 'Baltimore (Financial)' },

  // Baltimore County
  { zip: '21204', city: 'Towson', area: 'Baltimore County', neighborhood: 'Towson / Rodgers Forge' },
  { zip: '21221', city: 'Essex', area: 'Baltimore County', neighborhood: 'Essex / Middle River' },
  { zip: '21222', city: 'Dundalk', area: 'Baltimore County', neighborhood: 'Dundalk / Eastfield' },
  { zip: '21234', city: 'Parkville', area: 'Baltimore County', neighborhood: 'Parkville / Carney / Fullerton' },
  { zip: '21236', city: 'Nottingham', area: 'Baltimore County', neighborhood: 'Nottingham / Overlea' },
  { zip: '21237', city: 'Rosedale', area: 'Baltimore County', neighborhood: 'Rosedale / Rossville' },
  { zip: '21244', city: 'Windsor Mill', area: 'Baltimore County', neighborhood: 'Windsor Mill / Randallstown' },
  { zip: '21286', city: 'Towson', area: 'Baltimore County', neighborhood: 'Towson / Loch Raven' },
  { zip: '21117', city: 'Owings Mills', area: 'Baltimore County', neighborhood: 'Owings Mills / Reisterstown' },
  { zip: '21133', city: 'Randallstown', area: 'Baltimore County', neighborhood: 'Randallstown / Milford Mill' },
  { zip: '21136', city: 'Reisterstown', area: 'Baltimore County', neighborhood: 'Reisterstown / Glyndon' },
  { zip: '21162', city: 'White Marsh', area: 'Baltimore County', neighborhood: 'White Marsh / Middle River' },
  { zip: '21220', city: 'Middle River', area: 'Baltimore County', neighborhood: 'Middle River / Chase' },
  { zip: '21219', city: 'Sparrows Point', area: 'Baltimore County', neighborhood: 'Sparrows Point / Edgemere' },
  { zip: '21220', city: 'Middle River', area: 'Baltimore County', neighborhood: 'Middle River' },
  { zip: '21128', city: 'Perry Hall', area: 'Baltimore County', neighborhood: 'Perry Hall / White Marsh' },
  { zip: '21087', city: 'Kingsville', area: 'Baltimore County', neighborhood: 'Kingsville / Long Green' },
  { zip: '21057', city: 'Glen Arm', area: 'Baltimore County', neighborhood: 'Glen Arm / Loch Raven' },
  { zip: '21031', city: 'Hunt Valley', area: 'Baltimore County', neighborhood: 'Hunt Valley / Cockeysville' },
  { zip: '21030', city: 'Cockeysville', area: 'Baltimore County', neighborhood: 'Cockeysville / Hunt Valley' },
  { zip: '21093', city: 'Lutherville Timonium', area: 'Baltimore County', neighborhood: 'Lutherville / Timonium' },
  { zip: '21094', city: 'Lutherville', area: 'Baltimore County', neighborhood: 'Lutherville Timonium' },
  { zip: '21152', city: 'Sparks Glencoe', area: 'Baltimore County', neighborhood: 'Sparks / Glencoe' },
  { zip: '21153', city: 'Baltimore', area: 'Baltimore County', neighborhood: 'Pikesville / Seven Mile' },
  { zip: '21155', city: 'Upperco', area: 'Baltimore County', neighborhood: 'Upperco / Hampstead area' },
  { zip: '21161', city: 'White Hall', area: 'Baltimore County', neighborhood: 'White Hall / Fallston area' },

  // Anne Arundel County
  { zip: '21060', city: 'Glen Burnie', area: 'Anne Arundel County', neighborhood: 'Glen Burnie North' },
  { zip: '21061', city: 'Glen Burnie', area: 'Anne Arundel County', neighborhood: 'Glen Burnie South / Marley' },
  { zip: '21144', city: 'Severn', area: 'Anne Arundel County', neighborhood: 'Severn / Quarterfield' },
  { zip: '21146', city: 'Severna Park', area: 'Anne Arundel County', neighborhood: 'Severna Park / Chartwell' },
  { zip: '21122', city: 'Pasadena', area: 'Anne Arundel County', neighborhood: 'Pasadena / Lake Shore' },
  { zip: '21090', city: 'Linthicum Heights', area: 'Anne Arundel County', neighborhood: 'Linthicum Heights / BWI' },
  { zip: '21076', city: 'Hanover', area: 'Anne Arundel County', neighborhood: 'Hanover / Arundel Mills' },
  { zip: '21401', city: 'Annapolis', area: 'Anne Arundel County', neighborhood: 'Annapolis Downtown / West' },
  { zip: '21402', city: 'Annapolis', area: 'Anne Arundel County', neighborhood: 'Annapolis / US Naval Academy' },
  { zip: '21403', city: 'Annapolis', area: 'Anne Arundel County', neighborhood: 'Eastport / Bay Ridge' },
  { zip: '21404', city: 'Annapolis', area: 'Anne Arundel County', neighborhood: 'Annapolis PO Boxes' },
  { zip: '21405', city: 'Annapolis', area: 'Anne Arundel County', neighborhood: 'Annapolis / Parole' },
  { zip: '21409', city: 'Annapolis', area: 'Anne Arundel County', neighborhood: 'Cape St. Claire / Broadneck' },
  { zip: '21012', city: 'Arnold', area: 'Anne Arundel County', neighborhood: 'Arnold / Cape St. Claire' },
  { zip: '21114', city: 'Crofton', area: 'Anne Arundel County', neighborhood: 'Crofton / Waugh Chapel' },
  { zip: '21054', city: 'Gambrills', area: 'Anne Arundel County', neighborhood: 'Gambrills / Odenton' },
  { zip: '21113', city: 'Odenton', area: 'Anne Arundel County', neighborhood: 'Odenton / Two Rivers' },
  { zip: '21035', city: 'Davidsonville', area: 'Anne Arundel County', neighborhood: 'Davidsonville' },
  { zip: '21037', city: 'Edgewater', area: 'Anne Arundel County', neighborhood: 'Edgewater / South River' },
  { zip: '21108', city: 'Millersville', area: 'Anne Arundel County', neighborhood: 'Millersville / Severance' },
  { zip: '21032', city: 'Crownsville', area: 'Anne Arundel County', neighborhood: 'Crownsville / Herald Harbor' },
  { zip: '21140', city: 'Riva', area: 'Anne Arundel County', neighborhood: 'Riva / South River' },
  { zip: '21225', city: 'Brooklyn Park', area: 'Anne Arundel County', neighborhood: 'Brooklyn Park / Ferndale' },

  // Howard County
  { zip: '21044', city: 'Columbia', area: 'Howard County', neighborhood: "Columbia / Harper's Choice / Wilde Lake" },
  { zip: '21045', city: 'Columbia', area: 'Howard County', neighborhood: 'Columbia / Kings Contrivance / Owen Brown' },
  { zip: '21046', city: 'Columbia', area: 'Howard County', neighborhood: 'Columbia / Long Reach / Oakland Mills' },
  { zip: '21042', city: 'Ellicott City', area: 'Howard County', neighborhood: "Ellicott City / Turf Valley / Taylor's Choice" },
  { zip: '21043', city: 'Ellicott City', area: 'Howard County', neighborhood: 'Historic Ellicott City / Thistle' },
  { zip: '21075', city: 'Elkridge', area: 'Howard County', neighborhood: 'Elkridge / Monteverde' },
  { zip: '20794', city: 'Jessup', area: 'Howard County', neighborhood: 'Jessup / Savage' },
  { zip: '21029', city: 'Clarksville', area: 'Howard County', neighborhood: 'Clarksville / River Hill' },
  { zip: '21036', city: 'Dayton', area: 'Howard County', neighborhood: 'Dayton / Western Howard County' },
  { zip: '21163', city: 'Woodstock', area: 'Howard County', neighborhood: 'Woodstock / Rockburn' },
  { zip: '21797', city: 'Woodbine', area: 'Howard County', neighborhood: 'Woodbine / Lisbon' },
  { zip: '21723', city: 'Cooksville', area: 'Howard County', neighborhood: 'Cooksville / West Friendship' },
  { zip: '21737', city: 'Glenwood', area: 'Howard County', neighborhood: 'Glenwood / Folly Quarter' },

  // Prince George's / Laurel corridor
  { zip: '20707', city: 'Laurel', area: "Prince George's County", neighborhood: 'West Laurel / North Laurel' },
  { zip: '20708', city: 'Laurel', area: "Prince George's County", neighborhood: 'South Laurel / Montpelier' },
  { zip: '20723', city: 'Laurel', area: 'Howard County', neighborhood: 'North Laurel / Muirkirk' },
  { zip: '20724', city: 'Laurel', area: 'Anne Arundel County', neighborhood: 'Laurel / Russett / Fort Meade' },
  { zip: '20755', city: 'Fort Meade', area: 'Anne Arundel County', neighborhood: 'Fort Meade / Odenton' },

  // Carroll County (within range)
  { zip: '21157', city: 'Westminster', area: 'Carroll County', neighborhood: 'Westminster' },
  { zip: '21158', city: 'Westminster', area: 'Carroll County', neighborhood: 'Westminster North' },
  { zip: '21074', city: 'Hampstead', area: 'Carroll County', neighborhood: 'Hampstead / Manchester' },
  { zip: '21102', city: 'Manchester', area: 'Carroll County', neighborhood: 'Manchester / Pleasant Valley' },

  // Harford County (within range)
  { zip: '21040', city: 'Edgewood', area: 'Harford County', neighborhood: 'Edgewood / Perryman' },
  { zip: '21085', city: 'Joppa', area: 'Harford County', neighborhood: 'Joppa / Joppatowne' },
  { zip: '21010', city: 'Gunpowder', area: 'Harford County', neighborhood: 'Gunpowder / Aberdeen Proving Ground' },
  { zip: '21001', city: 'Aberdeen', area: 'Harford County', neighborhood: 'Aberdeen' },
  { zip: '21014', city: 'Bel Air', area: 'Harford County', neighborhood: 'Bel Air / Fallston' },
  { zip: '21015', city: 'Bel Air', area: 'Harford County', neighborhood: 'Bel Air North' },
  { zip: '21047', city: 'Fallston', area: 'Harford County', neighborhood: 'Fallston / Jarrettsville' },
  { zip: '21050', city: 'Fallston', area: 'Harford County', neighborhood: 'Fallston North' },
  { zip: '21078', city: 'Havre de Grace', area: 'Harford County', neighborhood: 'Havre de Grace' },
];

export default function ServiceAreasSection() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ZIP_DATA.filter(
      d =>
        d.zip.includes(q) ||
        d.city.toLowerCase().includes(q) ||
        d.area.toLowerCase().includes(q) ||
        d.neighborhood.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  const showDropdown = focused && query.trim().length >= 2;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Coverage Area</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2 mb-3">
            Do We Service Your ZIP Code?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            We cover a <strong>40-mile radius around Baltimore</strong> — including Baltimore City, Baltimore County, Anne Arundel County, Howard County, Harford County, and Carroll County. Search your ZIP code or city below to check instantly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className={`flex items-center gap-3 bg-white border-2 rounded-2xl px-5 py-4 shadow-lg transition-all ${focused ? 'border-primary shadow-primary/20' : 'border-border'}`}>
            <Search className={`w-5 h-5 flex-shrink-0 transition-colors ${focused ? 'text-primary' : 'text-muted-foreground'}`} />
            <input
              type="text"
              placeholder="Enter your ZIP code or city (e.g. 21224 or Towson)"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              className="flex-1 text-sm font-medium text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-muted-foreground hover:text-foreground text-lg leading-none">&times;</button>
            )}
          </div>

          {/* Dropdown Results */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-2xl shadow-2xl z-30 overflow-hidden"
              >
                {results.length === 0 ? (
                  <div className="px-5 py-5 text-center">
                    <p className="text-sm font-semibold text-foreground mb-1">ZIP code not found in our database</p>
                    <p className="text-xs text-muted-foreground">We may still cover your area — call us to confirm!</p>
                    <a href="tel:4434993999" className="inline-flex items-center gap-2 mt-3 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-primary/90 transition-all">
                      <Phone className="w-3 h-3" /> Call 443 499 3999
                    </a>
                  </div>
                ) : (
                  <div>
                    <p className="px-5 pt-3 pb-1 text-xs text-muted-foreground font-medium">{results.length} area{results.length !== 1 ? 's' : ''} found</p>
                    {results.map((d, i) => (
                      <motion.div
                        key={d.zip + i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 border-t border-border/50 first:border-t-0 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-foreground">{d.city}</p>
                          <p className="text-xs text-muted-foreground">{d.neighborhood} · {d.area}</p>
                        </div>
                        <span className="ml-auto text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full flex-shrink-0">✓ We Service</span>
                      </motion.div>
                    ))}
                    <div className="px-5 py-3 bg-primary/5 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">15–30 min response · 24/7 · Services available in this area:</p>
                      <div className="flex flex-wrap gap-2">
                        <Link to="/car-locksmith-baltimore" className="inline-flex items-center gap-1 text-xs font-semibold bg-red-50 text-red-700 px-2.5 py-1 rounded-full hover:bg-red-100 transition-colors"><Car className="w-3 h-3" />Automotive</Link>
                        <Link to="/house-locksmith-baltimore" className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"><Home className="w-3 h-3" />Residential</Link>
                        <Link to="/commercial-locksmith-baltimore" className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full hover:bg-gray-200 transition-colors"><Building2 className="w-3 h-3" />Commercial</Link>
                        <Link to="/emergency-locksmith-baltimore" className="inline-flex items-center gap-1 text-xs font-semibold bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full hover:bg-orange-100 transition-colors"><AlertTriangle className="w-3 h-3" />Emergency</Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* County Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {[
            { label: 'Baltimore City', color: 'bg-red-50 text-red-700 border-red-200' },
            { label: 'Baltimore County', color: 'bg-orange-50 text-orange-700 border-orange-200' },
            { label: 'Anne Arundel County', color: 'bg-blue-50 text-blue-700 border-blue-200' },
            { label: 'Howard County', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            { label: 'Harford County', color: 'bg-green-50 text-green-700 border-green-200' },
            { label: 'Carroll County', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
          ].map(({ label, color }) => (
            <button
              key={label}
              onClick={() => setQuery(label.replace(' County', '').replace('Baltimore City', 'Baltimore City'))}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:scale-105 ${color}`}
            >
              <MapPin className="w-3 h-3 inline mr-1" />{label}
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-950 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-black mb-2">Not Sure? Just Call Us.</h3>
          <p className="text-white/60 mb-6 max-w-xl mx-auto text-sm">We serve many more areas beyond what's listed above. If you don't see your location, give us a call — our coverage is extensive and we're likely available in your area.</p>
          <a
            href="tel:4434993999"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
          >
            <Phone className="w-5 h-5" /> 443 499 3999
          </a>
        </div>
      </div>
    </section>
  );
}