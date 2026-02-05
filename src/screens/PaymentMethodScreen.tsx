import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentMethodScreen.css';

type PaymentMethod = 'upi' | 'card' | 'netbanking';

const PAYMENT_OPTIONS: { id: PaymentMethod; icon: string; title: string; subtitle: string }[] = [
  { id: 'upi', icon: 'smartphone', title: 'UPI', subtitle: 'Google Pay, PhonePe, Paytm' },
  { id: 'card', icon: 'credit_card', title: 'Credit / Debit Cards', subtitle: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', icon: 'account_balance', title: 'Net Banking', subtitle: 'All major banks supported' },
];

export function PaymentMethodScreen() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<PaymentMethod>('upi');

  return (
    <div className="pay-method">
      <header className="pay-method__header">
        <button
          type="button"
          className="pay-method__back"
          onClick={() => navigate('/subscription-plans')}
          aria-label="Back"
        >
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back_ios_new</span>
        </button>
        <h1 className="pay-method__title">Payment Method</h1>
      </header>

      <main className="pay-method__main">
        <section className="pay-method__plan-card">
          <div className="pay-method__plan-pattern" aria-hidden="true" />
          <div className="pay-method__plan-inner">
            <div className="pay-method__plan-left">
              <span className="pay-method__plan-label">Selected Plan</span>
              <h2 className="pay-method__plan-name">DECA Pro Annual</h2>
              <span className="pay-method__plan-date">Next billing on Nov 12, 2024</span>
            </div>
            <div className="pay-method__plan-right">
              <span className="pay-method__plan-price">₹4000</span>
              <span className="pay-method__plan-original">₹4800/yr</span>
            </div>
          </div>
        </section>

        <section className="pay-method__options">
          <div className="pay-method__options-head">
            <h3 className="pay-method__options-title">Select Option</h3>
            <button type="button" className="pay-method__manage">Manage Cards</button>
          </div>

          {PAYMENT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`pay-method__option ${method === opt.id ? 'pay-method__option--selected' : ''}`}
              onClick={() => setMethod(opt.id)}
            >
              <div className="pay-method__option-icon-wrap">
                <span className="material-symbols-outlined" aria-hidden="true">{opt.icon}</span>
              </div>
              <div className="pay-method__option-text">
                <span className="pay-method__option-title">{opt.title}</span>
                <span className="pay-method__option-subtitle">{opt.subtitle}</span>
              </div>
              <div className={`pay-method__radio ${method === opt.id ? 'pay-method__radio--on' : ''}`}>
                <div className="pay-method__radio-dot" />
              </div>
            </button>
          ))}
        </section>

        <div className="pay-method__security">
          <span className="material-symbols-outlined pay-method__shield" aria-hidden="true">shield_lock</span>
          <p className="pay-method__security-text">Payment is 100% Secure & Encrypted</p>
        </div>
      </main>

      <footer className="pay-method__footer">
        <div className="pay-method__footer-inner">
          <div className="pay-method__total-row">
            <div className="pay-method__total-left">
              <span className="pay-method__total-label">Total Payable</span>
              <span className="pay-method__total-amount">₹4,000</span>
            </div>
            <button type="button" className="pay-method__breakup">View Breakup</button>
          </div>
          <button type="button" className="pay-method__cta" onClick={() => navigate('/subscription-success')}>
            <span className="material-symbols-outlined" aria-hidden="true">lock</span>
            <span>Securely Pay Now</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
