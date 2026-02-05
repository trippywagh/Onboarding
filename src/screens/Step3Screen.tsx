import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepProgress } from '@/components/ui/StepProgress';
import { Button } from '@/components/ui/Button';
import './Step3Screen.css';

type Track = 'ncert-deca' | 'foundation';

export function Step3Screen() {
  const navigate = useNavigate();
  const [track, setTrack] = useState<Track | null>(null);

  return (
    <div className="step3-screen">
      <StepProgress step={3} total={3} onBack={() => navigate('/step2')} />

      <div className="step3-screen__content">
        <div className="step3-screen__icon">
          <div className="step3-icon-box">
            <span className="material-symbols-outlined step3-icon-route" aria-hidden="true">alt_route</span>
          </div>
        </div>
        <h1 className="step3-screen__title">What brings you to ALLEN?</h1>
        <p className="step3-screen__subtitle">
          Select the learning path that best aligns with your academic goals.
        </p>

        <div className="step3-screen__cards">
          <button
            type="button"
            className={`step3-card step3-card--ncert ${track === 'ncert-deca' ? 'step3-card--selected' : ''}`}
            onClick={() => setTrack('ncert-deca')}
          >
            <div className="step3-ncert__gradient" />
            <div className="step3-ncert__blur step3-ncert__blur--top" />
            <div className="step3-ncert__blur step3-ncert__blur--bottom" />
            <div className="step3-ncert__inner">
              <div className="step3-ncert__header">
                <div className="step3-ncert__brand">
                  <div className="step3-ncert__icon-wrap">
                    <span className="material-symbols-outlined step3-ncert__icon" aria-hidden="true">auto_awesome</span>
                  </div>
                  <div className="step3-ncert__titles">
                    <h3 className="step3-ncert__name">NCERT</h3>
                    <div className="step3-ncert__tag">
                      <span className="material-symbols-outlined step3-ncert__star" aria-hidden="true">star</span>
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
                <div className={`step3-radio step3-radio--ncert ${track === 'ncert-deca' ? 'step3-radio--on' : ''}`} aria-hidden="true">
                  <div className="step3-radio__dot" />
                </div>
              </div>
              <div className="step3-ncert__deca">
                <div className="step3-ncert__deca-head">
                  <span className="material-symbols-outlined step3-ncert__deca-icon" aria-hidden="true">view_in_ar</span>
                  <span className="step3-ncert__deca-title">DECA</span>
                </div>
                <p className="step3-ncert__deca-desc">
                  A revolutionary, immersive way of learning! Experience concepts like never before.
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            className={`step3-card step3-card--plain ${track === 'foundation' ? 'step3-card--selected' : ''}`}
            onClick={() => setTrack('foundation')}
          >
            <div className="step3-card__row">
              <span className="step3-card__icon step3-card__icon--grey">
                <span className="material-symbols-outlined step3-foundation-icon" aria-hidden="true">architecture</span>
              </span>
              <div className="step3-card__text step3-card__text--dark">
                <span className="step3-card__title">Foundation</span>
                <span className="step3-card__desc step3-card__desc--dark">
                  Specialized curriculum designed for advanced competitive exam preparation.
                </span>
              </div>
              <div className={`step3-radio step3-radio--plain ${track === 'foundation' ? 'step3-radio--on' : ''}`} aria-hidden="true">
                <div className="step3-radio__dot" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="step3-screen__footer">
        <Button
          variant="primary"
          onClick={() => (track === 'ncert-deca' ? navigate('/ncert-home') : navigate('/'))}
          disabled={!track}
        >
          GET STARTED →
        </Button>
      </div>
    </div>
  );
}
