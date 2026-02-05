import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PhoneFrame } from '@/components/PhoneFrame';
import { LoginScreen } from '@/screens/LoginScreen';
import { OTPScreen } from '@/screens/OTPScreen';
import { Step1Screen } from '@/screens/Step1Screen';
import { Step2Screen } from '@/screens/Step2Screen';
import { Step3Screen } from '@/screens/Step3Screen';
import { NcertHomeScreen } from '@/screens/NcertHomeScreen';
import { TrialEndedScreen } from '@/screens/TrialEndedScreen';
import { SubscriptionPlansScreen } from '@/screens/SubscriptionPlansScreen';
import { PaymentMethodScreen } from '@/screens/PaymentMethodScreen';
import { SubscriptionSuccessScreen } from '@/screens/SubscriptionSuccessScreen';
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
          <Route path="/otp" element={<OTPScreen />} />
          <Route path="/step1" element={<Step1Screen />} />
          <Route path="/step2" element={<Step2Screen />} />
          <Route path="/step3" element={<Step3Screen />} />
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
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
