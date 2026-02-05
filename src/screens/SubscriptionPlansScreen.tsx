import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscriptionPlansScreen.css';

const GEMSTONE_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxjl6roIuDXzEu-aw_-oDmaEXVeu3dcCwO6PWvFVnyiUUHK0K7dwjS09G6Z64IeZXULDcwQI4uxCnZsehwjejMfCnhHVTvOW_CyZZ2h4Q8l6T5RJcS8uA9iCOOA8jMmyhk-0ddjJct-MDDrorjnq6Q_BnM3CbSWZxLOFi_bDNnlwxExOh1QsuwXr0BVAVMxtn-WgeFC4tg89Ac4-2eP9mjbUXFLVF4on7tDyGJTbvHM3Msa-fCds_TnVYIcPoVRKuZRCl40PtwFaE';

const FEATURES = [
  { icon: 'view_in_ar', label: 'Immersive 3D Learning' },
  { icon: 'assignment', label: 'Mock Tests' },
  { icon: 'all_inclusive', label: 'Unlimited Access' },
] as const;

type Plan = 'monthly' | 'yearly';

export function SubscriptionPlansScreen() {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<Plan>('yearly');

  return (
    <div className="sub-plans">
      <div className="sub-plans__blur" aria-hidden="true" />

      <main className="sub-plans__main">
        <div className="sub-plans__hero">
          <div className="sub-plans__gem-wrap">
            <div className="sub-plans__gem-glow" aria-hidden="true" />
            <div
              className="sub-plans__gem"
              style={{ backgroundImage: `url("${GEMSTONE_IMAGE}")` }}
              role="img"
              aria-label="3D rendered blue gemstone"
            />
          </div>
          <h1 className="sub-plans__title">Unlock DECA Pro</h1>
          <p className="sub-plans__subtitle">
            Master every concept with immersive tools and exclusive content.
          </p>
        </div>

        <div className="sub-plans__cards">
          <button
            type="button"
            className={`sub-plans__card ${plan === 'monthly' ? 'sub-plans__card--selected' : ''}`}
            onClick={() => setPlan('monthly')}
          >
            <div className="sub-plans__card-head">
              <h2 className="sub-plans__card-title sub-plans__card-title--muted">Monthly</h2>
              <p className="sub-plans__card-price">
                <span className="sub-plans__card-amount">₹400</span>
                <span className="sub-plans__card-period">/mo</span>
              </p>
            </div>
            <div className="sub-plans__card-features">
              {FEATURES.map((f) => (
                <div key={f.icon} className="sub-plans__feature sub-plans__feature--muted">
                  <span className="material-symbols-outlined sub-plans__feature-icon" aria-hidden="true">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </button>

          <button
            type="button"
            className={`sub-plans__card sub-plans__card--yearly ${plan === 'yearly' ? 'sub-plans__card--selected' : ''}`}
            onClick={() => setPlan('yearly')}
          >
            <span className="sub-plans__badge">Best Value</span>
            <div className="sub-plans__card-head">
              <h2 className="sub-plans__card-title">Yearly</h2>
              <div className="sub-plans__card-price-row">
                <p className="sub-plans__card-price">
                  <span className="sub-plans__card-amount sub-plans__card-amount--lg">₹4000</span>
                  <span className="sub-plans__card-period">/yr</span>
                </p>
                <span className="sub-plans__save">Save ₹800</span>
              </div>
              <p className="sub-plans__card-original">₹4800</p>
            </div>
            <div className="sub-plans__card-features">
              {FEATURES.map((f) => (
                <div key={f.icon} className="sub-plans__feature">
                  <span className="material-symbols-outlined sub-plans__feature-icon sub-plans__feature-icon--fill" aria-hidden="true">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </button>
        </div>
      </main>

      <footer className="sub-plans__footer">
        <div className="sub-plans__footer-fade" aria-hidden="true" />
        <div className="sub-plans__footer-inner">
          <button
            type="button"
            className="sub-plans__cta"
            onClick={() => navigate('/payment-method')}
          >
            <span>Continue</span>
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </button>
          <p className="sub-plans__disclaimer">
            Recurring billing. Cancel anytime in settings.
          </p>
        </div>
      </footer>
    </div>
  );
}
