import { Link, useLocation } from 'react-router-dom';
import './PrototypeNav.css';

const SCREENS = [
  { path: '/', label: 'Login' },
  { path: '/otp', label: 'OTP' },
  { path: '/step1', label: 'Step 1' },
  { path: '/step2', label: 'Step 2' },
  { path: '/step2-board', label: 'Board Only' },
  { path: '/ncert-home', label: 'NCERT Home' },
  { path: '/trial-ended', label: 'Trial Ended' },
  { path: '/subscription-plans', label: 'Subscription Plans' },
  { path: '/payment-method', label: 'Payment Method' },
  { path: '/subscription-success', label: 'Subscription Success' },
];

export function PrototypeNav() {
  const location = useLocation();

  return (
    <nav className="proto-nav">
      <span className="proto-nav__title">Screens</span>
      <div className="proto-nav__links">
        {SCREENS.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`proto-nav__link ${location.pathname === path ? 'proto-nav__link--active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
