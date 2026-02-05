import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NcertHomeScreen.css';

const SUBJECTS = [
  { id: 'physics', label: 'Physics', icon: 'electric_bolt' },
  { id: 'chemistry', label: 'Chemistry', icon: 'science' },
  { id: 'maths', label: 'Maths', icon: 'π', isPi: true },
  { id: 'biology', label: 'Biology', icon: 'genetics' },
] as const;

const NAV_ITEMS = [
  { id: 'watch', label: 'Watch', icon: 'smart_display', active: true },
  { id: 'doubts', label: 'Doubts', icon: 'help_outline', active: false },
  { id: 'search', label: 'Search', icon: 'search', active: false },
  { id: 'library', label: 'Library', icon: 'local_library', active: false },
] as const;

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb8Fdz1lvfMg3_3k-w60MEVBozcHStN6jd2LVt6dHK00CvlP7rvb6IEu6_boAjxNpcT-5lVELPY5M44tkBY2xiQYndlyTGZqnQfSH3oe8DfEpOzPWjGqu0hV3_SmGY6AGw3wi6WD1-YHjbOX5O9DBI96pJXvg2zK4ndqGh-JPXYPap12isIS8Admn37jdXj0ME0G6oqfMWyFhsRdQqt5wDE-D-_Vrhwe8aRxk7uJJz2N_YGtQNfa8xyb-IQhdCCKFQXCAZE_DFxlg';

export function NcertHomeScreen() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState<string>('watch');

  return (
    <div className="ncert-home">
      <header className="ncert-home__header">
        <div className="ncert-home__header-left">
          <div className="ncert-home__avatar">
            <span className="material-icons-round" aria-hidden="true">person</span>
          </div>
          <button type="button" className="ncert-home__track-btn">
            <span className="ncert-home__track-label">NCERT</span>
            <span className="material-icons-round ncert-home__track-chevron" aria-hidden="true">expand_more</span>
          </button>
        </div>
        <div className="ncert-home__header-right">
          <div className="ncert-home__streak">
            <div className="ncert-home__streak-icon">
              <span className="material-icons-round" aria-hidden="true">local_fire_department</span>
            </div>
            <span className="ncert-home__streak-count">12</span>
          </div>
          <div className="ncert-home__notif">
            <span className="material-icons-round" aria-hidden="true">notifications</span>
            <span className="ncert-home__notif-dot" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main className="ncert-home__main">
        <div className="ncert-home__hero">
          <img
            src={HERO_IMAGE}
            alt="Museum hall with dinosaur skeleton and sunlight through glass roof"
            className="ncert-home__hero-img"
          />
          <div className="ncert-home__hero-overlay ncert-home__hero-overlay--bottom" />
          <div className="ncert-home__hero-overlay ncert-home__hero-overlay--top" />
          <button type="button" className="ncert-home__hero-mute" aria-label="Volume">
            <span className="material-icons-round" aria-hidden="true">volume_off</span>
          </button>
          <div className="ncert-home__hero-content">
            <span className="ncert-home__hero-tag">Physics</span>
            <h2 className="ncert-home__hero-title">
              The Palace of <br /><span className="ncert-home__hero-title-accent">Endless Reflections</span>
            </h2>
            <p className="ncert-home__hero-subtitle">Light: Reflection & Refraction</p>
            <div className="ncert-home__hero-footer">
              <div className="ncert-home__hero-learners">
                <span className="material-symbols-rounded ncert-home__hero-eye" aria-hidden="true">visibility</span>
                <span>1232 learners</span>
              </div>
              <button type="button" className="ncert-home__hero-play" aria-label="Play">
                <span className="material-icons-round" aria-hidden="true">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        <div className="ncert-home__dots">
          <span className="ncert-home__dot ncert-home__dot--active" />
          <span className="ncert-home__dot" />
          <span className="ncert-home__dot" />
          <span className="ncert-home__dot" />
        </div>

        <div className="ncert-home__deca-banner">
          <div className="ncert-home__deca-inner">
            <div className="ncert-home__deca-blur ncert-home__deca-blur--l" />
            <div className="ncert-home__deca-blur ncert-home__deca-blur--r" />
            <div className="ncert-home__deca-left">
              <div className="ncert-home__deca-label-wrap">
                <span className="ncert-home__deca-label">DECA Trial Active</span>
                <span className="ncert-home__deca-pulse" aria-hidden="true" />
              </div>
              <div className="ncert-home__deca-timer">
                <span className="ncert-home__deca-num">06</span><span className="ncert-home__deca-unit">d</span>
                <span className="ncert-home__deca-sep">:</span>
                <span className="ncert-home__deca-num">23</span><span className="ncert-home__deca-unit">h</span>
                <span className="ncert-home__deca-sep">:</span>
                <span className="ncert-home__deca-num">59</span><span className="ncert-home__deca-unit">m</span>
              </div>
              <p className="ncert-home__deca-hint">Buy yearly to get 5 % off</p>
            </div>
            <button type="button" className="ncert-home__deca-cta" onClick={() => navigate('/subscription-plans')}>
              <span>Get Pro</span>
              <span className="material-icons-round" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="ncert-home__section">
          <h3 className="ncert-home__section-title">Explore Subjects</h3>
          <div className="ncert-home__section-line" />
        </div>
        <div className="ncert-home__subjects">
          {SUBJECTS.map((s) => (
            <div key={s.id} className="ncert-home__subject">
              <div className={`ncert-home__subject-card ncert-home__subject-card--${s.id}`}>
                {'isPi' in s && s.isPi ? (
                  <span className="ncert-home__subject-pi">π</span>
                ) : (
                  <span className={`material-symbols-rounded ncert-home__subject-icon ncert-home__subject-icon--${s.id}`} aria-hidden="true">{s.icon}</span>
                )}
              </div>
              <span className="ncert-home__subject-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="ncert-home__section ncert-home__section--muted">
          <h3 className="ncert-home__section-title">Continue Learning</h3>
        </div>
        <div className="ncert-home__continue-placeholder" />
      </main>

      <nav className="ncert-home__nav">
        <div className="ncert-home__nav-inner">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`ncert-home__nav-item ${activeNav === item.id ? 'ncert-home__nav-item--active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <div className="ncert-home__nav-icon-wrap">
                <span className="material-icons-round" aria-hidden="true">{item.icon}</span>
              </div>
              <span className="ncert-home__nav-label">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="ncert-home__nav-indicator" />
      </nav>
    </div>
  );
}
