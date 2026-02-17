import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PhoneFrame } from '@/components/PhoneFrame';
import { LoginScreen } from '@/screens/LoginScreen';
import { OTPScreen } from '@/screens/OTPScreen';
import { Step1Screen } from '@/screens/Step1Screen';
import { Step2Screen } from '@/screens/Step2Screen';
import { Step2CombinedScreen } from '@/screens/Step2CombinedScreen';
import { NcertHomeScreen } from '@/screens/NcertHomeScreen';
import { TrialEndedScreen } from '@/screens/TrialEndedScreen';
import { SubscriptionPlansScreen } from '@/screens/SubscriptionPlansScreen';
import { PaymentMethodScreen } from '@/screens/PaymentMethodScreen';
import { SubscriptionSuccessScreen } from '@/screens/SubscriptionSuccessScreen';
import { LandingPageScreen } from '@/screens/LandingPageScreen';
import { PrototypeNav } from '@/components/PrototypeNav';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <PrototypeNav />
      <div className="app__phone">
        <PhoneFrame>
          <div className="app__screen">
            <Routes>
          <Route path="/" element={<LoginScreen />} />
              <Route path="/landing" element={<LandingPageScreen />} />
          <Route path="/otp" element={<OTPScreen />} />
          <Route path="/step1" element={<Step1Screen />} />
              <Route path="/step2" element={<Step2CombinedScreen />} />
              <Route path="/step2-board" element={<Step2Screen />} />
              <Route path="/step3" element={<Navigate to="/step2" replace />} />
              <Route path="/ncert-home" element={<NcertHomeScreen />} />
              <Route path="/trial-ended" element={<TrialEndedScreen />} />
              <Route path="/subscription-plans" element={<SubscriptionPlansScreen />} />
              <Route path="/payment-method" element={<PaymentMethodScreen />} />
              <Route path="/subscription-success" element={<SubscriptionSuccessScreen />} />
            </Routes>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}

function AppWithRouter() {
  // Required for GitHub Pages: app is served at /Onboarding/, not /
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
