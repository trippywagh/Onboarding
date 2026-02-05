import { useNavigate } from 'react-router-dom';
import './TrialEndedScreen.css';

const SUBJECTS = [
  { id: 'physics', label: 'Physics', icon: 'electric_bolt' },
  { id: 'chemistry', label: 'Chemistry', icon: 'science' },
  { id: 'maths', label: 'Maths', icon: 'π', isPi: true },
  { id: 'biology', label: 'Biology', icon: 'genetics' },
] as const;

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb8Fdz1lvfMg3_3k-w60MEVBozcHStN6jd2LVt6dHK00CvlP7rvb6IEu6_boAjxNpcT-5lVELPY5M44tkBY2xiQYndlyTGZqnQfSH3oe8DfEpOzPWjGqu0hV3_SmGY6AGw3wi6WD1-YHjbOX5O9DBI96pJXvg2zK4ndqGh-JPXYPap12isIS8Admn37jdXj0ME0G6oqfMWyFhsRdQqt5wDE-D-_Vrhwe8aRxk7uJJz2N_YGtQNfa8xyb-IQhdCCKFQXCAZE_DFxlg';

export function TrialEndedScreen() {
  const navigate = useNavigate();

  return (
    <div className="trial-ended">
      <div className="trial-ended__banner">
        <div className="trial-ended__banner-inner">
          <div className="trial-ended__banner-left">
            <div className="trial-ended__banner-icon">
              <span className="material-symbols-outlined" aria-hidden="true">timer_off</span>
            </div>
            <div>
              <p className="trial-ended__banner-label">Trial Ended</p>
              <p className="trial-ended__banner-text">Upgrade for full access</p>
            </div>
          </div>
          <button type="button" className="trial-ended__banner-cta" onClick={() => navigate('/subscription-plans')}>
            GET PRO
          </button>
        </div>
      </div>

      <header className="trial-ended__header">
        <div className="trial-ended__header-left">
          <div className="trial-ended__avatar">
            <span className="material-icons-round" aria-hidden="true">person</span>
          </div>
          <button type="button" className="trial-ended__track-btn">
            <span className="trial-ended__track-label">NCERT</span>
            <span className="material-icons-round trial-ended__track-chevron" aria-hidden="true">expand_more</span>
          </button>
        </div>
        <div className="trial-ended__header-right">
          <div className="trial-ended__streak trial-ended__streak--dimmed">
            <div className="trial-ended__streak-icon" />
            <span className="trial-ended__streak-count">12</span>
          </div>
        </div>
      </header>

      <main className="trial-ended__main">
        <div className="trial-ended__hero">
          <img src={HERO_IMAGE} alt="Museum hall with dinosaur skeleton" className="trial-ended__hero-img" />
          <div className="trial-ended__hero-overlay" />
          <span className="trial-ended__hero-badge">Free Preview</span>
          <div className="trial-ended__hero-content">
            <span className="trial-ended__hero-tag">Welcome Lesson</span>
            <h2 className="trial-ended__hero-title">
              The Palace of <br /><span className="trial-ended__hero-title-accent">Endless Reflections</span>
            </h2>
            <p className="trial-ended__hero-subtitle">Physics: Reflection & Refraction</p>
            <div className="trial-ended__hero-footer">
              <div className="trial-ended__hero-learners">
                <span className="material-symbols-rounded" aria-hidden="true">visibility</span>
                <span>Unlocked for everyone</span>
              </div>
              <button type="button" className="trial-ended__hero-play" aria-label="Play">
                <span className="material-icons-round" aria-hidden="true">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        <div className="trial-ended__section">
          <h3 className="trial-ended__section-title">Explore Subjects</h3>
          <div className="trial-ended__section-line" />
        </div>
        <div className="trial-ended__subjects">
          {SUBJECTS.map((s) => (
            <div key={s.id} className="trial-ended__subject trial-ended__subject--locked">
              <div className={`trial-ended__subject-card trial-ended__subject-card--${s.id}`}>
                {'isPi' in s && s.isPi ? (
                  <span className="trial-ended__subject-pi">π</span>
                ) : (
                  <span className={`material-symbols-rounded trial-ended__subject-icon`} aria-hidden="true">{s.icon}</span>
                )}
                <div className="trial-ended__subject-lock">
                  <span className="material-symbols-outlined" aria-hidden="true">lock</span>
                </div>
              </div>
              <span className="trial-ended__subject-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="trial-ended__cta-card">
          <div className="trial-ended__cta-card-fade" aria-hidden="true" />
          <div className="trial-ended__cta-inner">
            <div className="trial-ended__cta-icon-wrap">
              <span className="material-symbols-outlined trial-ended__cta-icon" aria-hidden="true">lock_open</span>
            </div>
            <h4 className="trial-ended__cta-title">Free Trial Ended</h4>
            <p className="trial-ended__cta-desc">Unlock 500+ premium cinematic lessons and interactive doubts.</p>
            <button type="button" className="trial-ended__cta-btn" onClick={() => navigate('/subscription-plans')}>
              Compare Plans
            </button>
          </div>
        </div>

        <div className="trial-ended__section trial-ended__section--muted">
          <h3 className="trial-ended__section-title">Continue Learning</h3>
        </div>
        <div className="trial-ended__continue-placeholder" />
      </main>

      <nav className="trial-ended__nav">
        <div className="trial-ended__nav-inner">
          <div className="trial-ended__nav-item trial-ended__nav-item--active">
            <div className="trial-ended__nav-icon-wrap trial-ended__nav-icon-wrap--active">
              <span className="material-icons-round" aria-hidden="true">smart_display</span>
            </div>
            <span className="trial-ended__nav-label">Watch</span>
          </div>
          <div className="trial-ended__nav-item trial-ended__nav-item--locked">
            <div className="trial-ended__nav-icon-wrap">
              <span className="material-icons-round" aria-hidden="true">help_outline</span>
              <span className="trial-ended__nav-lock">
                <span className="material-symbols-outlined" aria-hidden="true">lock</span>
              </span>
            </div>
            <span className="trial-ended__nav-label">Doubts</span>
          </div>
          <div className="trial-ended__nav-item trial-ended__nav-item--locked">
            <div className="trial-ended__nav-icon-wrap">
              <span className="material-icons-round" aria-hidden="true">search</span>
              <span className="trial-ended__nav-lock">
                <span className="material-symbols-outlined" aria-hidden="true">lock</span>
              </span>
            </div>
            <span className="trial-ended__nav-label">Search</span>
          </div>
          <div className="trial-ended__nav-item trial-ended__nav-item--locked">
            <div className="trial-ended__nav-icon-wrap">
              <span className="material-icons-round" aria-hidden="true">local_library</span>
              <span className="trial-ended__nav-lock">
                <span className="material-symbols-outlined" aria-hidden="true">lock</span>
              </span>
            </div>
            <span className="trial-ended__nav-label">Library</span>
          </div>
        </div>
        <div className="trial-ended__nav-indicator" />
      </nav>
    </div>
  );
}
