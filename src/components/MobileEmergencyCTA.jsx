import { useState } from 'react';
import { Phone, X, AlertTriangle, User, Car, Home, KeyRound, Wrench, HelpCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileEmergencyCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '', issue: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AAddress: ${form.address}%0AIssue: ${form.issue}`;
    window.open(`sms:4434313795?body=${body}`);
    setSubmitted(true);
    setTimeout(() => {setSubmitted(false);setIsOpen(false);setForm({ name: '', phone: '', address: '', issue: '' });}, 3000);
  };

  return (
    <>
      {/* Backdrop when form is open */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)} />

        }
      </AnimatePresence>

      {/* Sliding panel + sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Expandable Form Panel */}
        <AnimatePresence>
          {isOpen &&
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="bg-white rounded-t-3xl shadow-2xl px-5 pt-5 pb-6 border-t border-border max-w-lg mx-auto w-full">
            
              {/* Handle */}
              <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="font-black text-lg text-foreground">Request Emergency Help</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {submitted ?
            <div className="text-center py-6">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="font-bold text-foreground">Request Sent!</p>
                  <p className="text-muted-foreground text-sm">We'll reach out shortly.</p>
                </div> :

            <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name */}
                  <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary/40">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="flex-1 text-sm focus:outline-none bg-transparent" />
                
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary/40">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-3.5 h-3.5 text-green-500" />
                    </div>
                    <input
                  required
                  type="tel"
                  placeholder="Your Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="flex-1 text-sm focus:outline-none bg-transparent" />
                
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary/40">
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <input
                  required
                  placeholder="Address of Service"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="flex-1 text-sm focus:outline-none bg-transparent" />
                
                  </div>

                  {/* Issue type */}
                  <p className="text-xs text-muted-foreground font-medium px-1">Select Issue Type</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                { label: 'Car Lockout', icon: Car, color: 'text-red-500', bg: 'bg-red-50', ring: 'ring-red-400' },
                { label: 'Home Lockout', icon: Home, color: 'text-blue-500', bg: 'bg-blue-50', ring: 'ring-blue-400' },
                { label: 'Lost Car Keys', icon: KeyRound, color: 'text-yellow-500', bg: 'bg-yellow-50', ring: 'ring-yellow-400' },
                { label: 'Broken Lock', icon: Wrench, color: 'text-orange-500', bg: 'bg-orange-50', ring: 'ring-orange-400' },
                { label: 'Other Emergency', icon: HelpCircle, color: 'text-purple-500', bg: 'bg-purple-50', ring: 'ring-purple-400' }].
                map(({ label, icon: Icon, color, bg, ring }) =>
                <button
                  key={label}
                  type="button"
                  onClick={() => setForm({ ...form, issue: label })}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 transition-all text-center ${
                  form.issue === label ?
                  `border-current ring-2 ${ring} ${color} ${bg}` :
                  'border-border bg-gray-50 text-gray-400'}`
                  }>
                  
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${form.issue === label ? bg : 'bg-white'}`}>
                          <Icon className={`w-4 h-4 ${form.issue === label ? color : 'text-gray-400'}`} />
                        </div>
                        <span className="text-[10px] font-semibold leading-tight">{label}</span>
                      </button>
                )}
                  </div>

                  <button
                type="submit"
                disabled={!form.issue}
                className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed">
                
                    🚨 Send My Request
                  </button>
                </form>
            }
            </motion.div>
          }
        </AnimatePresence>

        {/* Sticky Bottom Bar — always visible, blurs content behind */}
        {!isOpen &&
        <div
          className="flex gap-2 px-3 pb-4 pt-3"
          style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', background: 'rgba(0,0,0,0.2)' }}>
          
            {/* Direct Call — bright red */}
            <a
            href="tel:4434993999"
            className="flex-1 flex items-center justify-center gap-2 text-white py-3.5 rounded-full font-bold text-sm active:scale-95 transition-transform shadow-lg"
            style={{ backgroundColor: 'rgba(220, 38, 38, 0.95)' }}>
            
              <Phone className="w-4 h-4" />
              Call Now
            </a>



          

            {/* Emergency — bright orange flashing, opens form */}
            <motion.button
            onClick={() => setIsOpen(true)}
            animate={{ backgroundColor: ['rgba(234,88,12,0.95)', 'rgba(251,146,60,1)', 'rgba(234,88,12,0.95)'] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            className="flex-1 flex items-center justify-center gap-2 text-white py-3.5 rounded-full font-bold text-sm active:scale-95 transition-transform shadow-lg">
            
              <AlertTriangle className="w-4 h-4" />
              Emergency Booking
            </motion.button>
          </div>
        }
      </div>
    </>);

}