import { Toaster } from "@/components/ui/toaster"
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Home from './pages/Home';
import CarLocksmith from './pages/CarLocksmith';
import HouseLocksmith from './pages/HouseLocksmith';
import CommercialLocksmith from './pages/CommercialLocksmith';
import ServiceArea from './pages/ServiceArea';
import WhyUsPage from './pages/WhyUsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import EmergencyLocksmith from './pages/EmergencyLocksmith';
import CarKeyReplacement from './pages/CarKeyReplacement';
import LockRekey from './pages/LockRekey';
import SmartLockInstallation from './pages/SmartLockInstallation';


function App() {

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/car-locksmith-baltimore" element={<CarLocksmith />} />
            <Route path="/house-locksmith-baltimore" element={<HouseLocksmith />} />
            <Route path="/commercial-locksmith-baltimore" element={<CommercialLocksmith />} />
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/emergency-locksmith-baltimore" element={<EmergencyLocksmith />} />
            <Route path="/car-key-replacement-baltimore" element={<CarKeyReplacement />} />
            <Route path="/lock-rekey-baltimore" element={<LockRekey />} />
            <Route path="/smart-lock-installation-baltimore" element={<SmartLockInstallation />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App