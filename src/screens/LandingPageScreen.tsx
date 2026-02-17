import { useNavigate } from 'react-router-dom';
import './LandingPageScreen.css';

const WHY_DECA = [
  {
    icon: 'auto_stories',
    title: 'Stories,',
    titleAlt: 'not slides',
    titleAltClass: 'landing-page__card-muted',
    desc: 'Forget boring PDFs. Learn through cinematic episodes.',
    glow: 'blue',
  },
  {
    icon: 'psychology',
    title: 'Think as you',
    titleAlt: 'learn',
    titleAltClass: 'landing-page__card-accent',
    desc: 'Interactive moments that turn watching into understanding.',
    glow: 'orange',
  },
  {
    icon: 'local_fire_department',
    title: 'Streaks &',
    titleAlt: 'Motivation',
    titleAltClass: 'landing-page__card-red',
    desc: 'Keep the fire burning with daily challenges and rewards.',
    glow: 'red',
  },
  {
    icon: 'bolt',
    title: 'Smart',
    titleAlt: 'Practice',
    titleAltClass: 'landing-page__card-green',
    desc: 'AI-driven practice and assessment for your learning!',
    glow: 'green',
  },
] as const;

export function LandingPageScreen() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-page__bg" aria-hidden="true" />

      <main className="landing-page__main">
        <section className="landing-page__hero">
          <div className="landing-page__brand">
            <div className="landing-page__brand-icon">D</div>
            <span className="landing-page__brand-text">
              DECA <span className="landing-page__brand-by">by ALLEN</span>
            </span>
          </div>
          <h1 className="landing-page__hero-title">
            Learning that feels like a{' '}
            <span className="landing-page__hero-accent">story</span>, not a syllabus.
          </h1>
          <p className="landing-page__hero-desc">
            DECA by ALLEN brings the joy back to Class 10. Master complex concepts through immersive storytelling.
          </p>
        </section>

        <section className="landing-page__why">
          <div className="landing-page__why-head">
            <h2 className="landing-page__why-title">
              <span className="landing-page__why-bar" />
              Why DECA?
            </h2>
            <div className="landing-page__why-dots">
              <span className="landing-page__why-dot landing-page__why-dot--active" />
              <span className="landing-page__why-dot" />
              <span className="landing-page__why-dot" />
              <span className="landing-page__why-dot" />
            </div>
          </div>
          <div className="landing-page__why-scroll">
            {WHY_DECA.map((card) => (
              <div
                key={card.icon}
                className={`landing-page__card landing-page__card--${card.glow}`}
              >
                <div className="landing-page__card-glow" aria-hidden="true" />
                <div className="landing-page__card-icon-wrap">
                  <span className="material-icons-round landing-page__card-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                </div>
                <div className="landing-page__card-content">
                  <h3 className="landing-page__card-title">
                    {card.title}
                    <br />
                    <span className={card.titleAltClass}>{card.titleAlt}</span>
                  </h3>
                  <p className="landing-page__card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="landing-page__how">
          <div className="landing-page__how-head">
            <h2 className="landing-page__how-title">How DECA Works?</h2>
            <p className="landing-page__how-sub">This is not cramming. It's evolving.</p>
          </div>
          <div className="landing-page__stepper">
            <div className="landing-page__stepper-line" aria-hidden="true" />
            <div className="landing-page__stepper-item">
              <div className="landing-page__stepper-icon">
                <span className="material-icons-round" aria-hidden="true">check</span>
              </div>
              <div className="landing-page__stepper-text">
                <h3 className="landing-page__stepper-head">Learn</h3>
                <p className="landing-page__stepper-desc">
                  Watch cinematic video lessons that break down complex topics into bite-sized stories.
                </p>
              </div>
            </div>
            <div className="landing-page__stepper-item">
              <div className="landing-page__stepper-icon">
                <span className="material-icons-round" aria-hidden="true">check</span>
              </div>
              <div className="landing-page__stepper-text">
                <h3 className="landing-page__stepper-head">Master</h3>
                <p className="landing-page__stepper-desc">
                  Practice with interactive quizzes and real-time feedback to solidify your understanding.
                </p>
              </div>
            </div>
            <div className="landing-page__stepper-item">
              <div className="landing-page__stepper-icon landing-page__stepper-icon--ace">
                <span className="material-icons-round" aria-hidden="true">emoji_events</span>
              </div>
              <div className="landing-page__stepper-text">
                <h3 className="landing-page__stepper-head">Ace</h3>
                <p className="landing-page__stepper-desc">
                  Take mock tests designed by ALLEN experts and conquer your exams with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-page__trial">
          <div className="landing-page__trial-card">
            <div className="landing-page__trial-top-line" aria-hidden="true" />
            <span className="landing-page__trial-badge">LIMITED TIME</span>
            <h2 className="landing-page__trial-title">Try DECA for free</h2>
            <div className="landing-page__trial-list">
              <div className="landing-page__trial-row">
                <span className="material-icons-round landing-page__trial-check" aria-hidden="true">check_circle</span>
                <span>No payment required</span>
              </div>
              <div className="landing-page__trial-row">
                <span className="material-icons-round landing-page__trial-check" aria-hidden="true">check_circle</span>
                <span>7-Day Access</span>
              </div>
              <div className="landing-page__trial-row">
                <span className="material-icons-round landing-page__trial-check" aria-hidden="true">check_circle</span>
                <span>Full Experience(4 chapters)</span>
              </div>
            </div>
            <button
              type="button"
              className="landing-page__trial-cta"
              onClick={() => navigate('/')}
            >
              Start 7-Day Free Trial
            </button>
          </div>
        </section>

        <section className="landing-page__plan">
          <div className="landing-page__plan-legacy">
            <span className="material-icons-round" aria-hidden="true">verified_user</span>
            <span>Built on ALLEN's Academic Legacy</span>
          </div>
          <div className="landing-page__plan-card">
            <span className="landing-page__plan-badge">RECOMMENDED</span>
            <div className="landing-page__plan-inner">
              <div className="landing-page__plan-star" aria-hidden="true">
                <span className="material-icons-round">star</span>
              </div>
              <h3 className="landing-page__plan-label">Annual Plan</h3>
              <div className="landing-page__plan-price">
                <span className="landing-page__plan-amount">₹3,999</span>
                <span className="landing-page__plan-gst">+ GST</span>
              </div>
              <p className="landing-page__plan-note">Billed annually. Cancel anytime.</p>
              <ul className="landing-page__plan-list">
                <li>
                  <span className="material-icons-round landing-page__plan-tick" aria-hidden="true">check</span>
                  All Subjects Covered
                </li>
                <li>
                  <span className="material-icons-round landing-page__plan-tick" aria-hidden="true">check</span>
                  Unlimited Doubt Solving
                </li>
                <li>
                  <span className="material-icons-round landing-page__plan-tick" aria-hidden="true">check</span>
                  Personal Mentor
                </li>
              </ul>
              <button
                type="button"
                className="landing-page__plan-cta"
                onClick={() => navigate('/subscription-plans')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>

        <section className="landing-page__trust">
          <h3 className="landing-page__trust-title">Learning parents trust</h3>
          <div className="landing-page__trust-avatars">
            <div className="landing-page__trust-avatar">
              <span className="material-symbols-outlined" aria-hidden="true">face_3</span>
            </div>
            <div className="landing-page__trust-avatar">
              <span className="material-symbols-outlined" aria-hidden="true">face_6</span>
            </div>
            <div className="landing-page__trust-avatar">
              <span className="material-symbols-outlined" aria-hidden="true">face_2</span>
            </div>
            <div className="landing-page__trust-avatar">
              <span className="material-symbols-outlined" aria-hidden="true">face_5</span>
            </div>
            <div className="landing-page__trust-avatar landing-page__trust-avatar--more">+2k</div>
          </div>
          <div className="landing-page__trust-rating">
            <span className="material-icons-round landing-page__trust-star" aria-hidden="true">star</span>
            <span className="material-icons-round landing-page__trust-star" aria-hidden="true">star</span>
            <span className="material-icons-round landing-page__trust-star" aria-hidden="true">star</span>
            <span className="material-icons-round landing-page__trust-star" aria-hidden="true">star</span>
            <span className="material-icons-round landing-page__trust-star" aria-hidden="true">star_half</span>
            <span className="landing-page__trust-score">4.8/5 Rating</span>
          </div>
        </section>

        <footer className="landing-page__footer">
          <p className="landing-page__footer-copy">© 2024 DECA by ALLEN. All rights reserved.</p>
          <div className="landing-page__footer-links">
            <a href="#" className="landing-page__footer-link">Privacy</a>
            <a href="#" className="landing-page__footer-link">Terms</a>
            <a href="#" className="landing-page__footer-link">Contact</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
