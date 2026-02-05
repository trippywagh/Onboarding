import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import './LoginScreen.css';

export function LoginScreen() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  const isValid = mobile.replace(/\D/g, '').length === 10;

  return (
    <div className="login-screen">
      <header className="login-screen__header">
        <h1 className="login-screen__logo">ALLEN</h1>
      </header>

      <div className="login-screen__hero">
        <div className="hero-card">
          <div className="hero-card__left">
            <span className="hero-card__number">340+</span>
            <span className="hero-card__stars">★ ✦</span>
            <p className="hero-card__text">students got Govt. Medical College in</p>
            <p className="hero-card__highlight">NEET UG 2025</p>
          </div>
          <div className="hero-card__right">
            <div className="hero-card__profile">
              <div className="hero-card__avatar" />
              <div>
                <div className="hero-card__air">AIR 74</div>
                <div className="hero-card__name">Tanmay Jagga</div>
                <div className="hero-card__college">MAMC Delhi</div>
              </div>
            </div>
            <div className="hero-card__profile">
              <div className="hero-card__avatar hero-card__avatar--2" />
              <div>
                <div className="hero-card__air">AIR 247</div>
                <div className="hero-card__name">Debarghya Bag</div>
                <div className="hero-card__college">AIIMS Delhi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-screen__dots">
        <span className="dot dot--active" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>

      <div className="login-screen__form">
        <Input
          type="tel"
          placeholder="Enter your 10 digit mobile number"
          value={mobile}
          onChange={setMobile}
          maxLength={10}
        />
        <Button
          variant={isValid ? 'primary' : 'disabled'}
          disabled={!isValid}
          onClick={() => isValid && navigate('/otp')}
        >
          Continue
        </Button>

        <div className="login-screen__or">
          <span className="login-screen__or-line" />
          <span className="login-screen__or-text">OR</span>
          <span className="login-screen__or-line" />
        </div>

        <Button variant="outline" onClick={() => navigate('/otp')}>
          Continue with Form ID
        </Button>
        <Button variant="outline" onClick={() => navigate('/otp')}>
          Continue with Email ID
        </Button>
      </div>

      <footer className="login-screen__footer">
        By continuing you are accepting our{' '}
        <a href="#privacy">Privacy Policy</a> and <a href="#terms">Terms & Conditions</a>
      </footer>
    </div>
  );
}
