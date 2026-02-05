import { useNavigate } from 'react-router-dom';
import './SubscriptionSuccessScreen.css';

const CHARACTER_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdXP7c8fAYq446IgER0-7IbqT82JoWrJ3gfN2tetRQPs3wEeQMmc8r7jYsP4irLiSu-aQQNBM8Pr1NNJgzrT12NWxOLO_Bsm9pkb6VQFTTnY9TJNEAbN6fJ1Fj4zyhy85YIWyVUOs8FHs7ZkuZDlmNPb8MHWAJyWIi5ZceBDMqlbZzKeieZ8tZh1L8llSH4ULpdNpIBZSMjrhrdOeYg9D5aZDp7vn3p5GtDihom_NZBM1B4qoTvlSSgS1sOiAiL4y_8_IeFc03aeA';

export function SubscriptionSuccessScreen() {
  const navigate = useNavigate();

  const goHome = () => navigate('/ncert-home');

  return (
    <div className="sub-success">
      <div className="sub-success__bg">
        <div className="sub-success__glow" aria-hidden="true" />
        <div className="sub-success__confetti sub-success__confetti--1" aria-hidden="true" />
        <div className="sub-success__confetti sub-success__confetti--2" aria-hidden="true" />
        <div className="sub-success__confetti sub-success__confetti--3" aria-hidden="true" />
        <div className="sub-success__confetti sub-success__confetti--4" aria-hidden="true" />
        <div className="sub-success__confetti sub-success__confetti--5" aria-hidden="true" />
        <div className="sub-success__confetti sub-success__confetti--6" aria-hidden="true" />
      </div>

      <header className="sub-success__header">
        <button
          type="button"
          className="sub-success__close"
          onClick={goHome}
          aria-label="Close"
        >
          <span className="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
      </header>

      <main className="sub-success__main">
        <div className="sub-success__char-wrap">
          <div
            className="sub-success__char"
            style={{ backgroundImage: `url("${CHARACTER_IMAGE}")` }}
            role="img"
            aria-label="3D cartoon character giving a thumbs up"
          />
        </div>
        <div className="sub-success__text">
          <h1 className="sub-success__title">Welcome to the Pro Club, Alex!</h1>
          <p className="sub-success__subtitle">
            Your DECA Pro subscription is now active. Let's start learning!
          </p>
        </div>
      </main>

      <footer className="sub-success__footer">
        <button type="button" className="sub-success__cta" onClick={goHome}>
          Explore Pro Content
        </button>
      </footer>
    </div>
  );
}
