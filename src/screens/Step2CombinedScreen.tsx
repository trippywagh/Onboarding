import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepProgress } from '@/components/ui/StepProgress';
import { Button } from '@/components/ui/Button';
import './Step2CombinedScreen.css';

const BOARDS = ['CBSE', 'ICSE', 'STATE', 'OTHERS'] as const;
type Track = 'ncert-deca' | 'foundation';

const DECA_BULLETS = [
  { icon: '3d_rotation', label: 'Immersive Learning' },
  { icon: 'psychology', label: 'AI Driven Paths' },
  { icon: 'check', label: 'REVOLUTIONARY METHOD', italic: true },
] as const;

export function Step2CombinedScreen() {
  const navigate = useNavigate();
  const [board, setBoard] = useState<string>('');
  const [track, setTrack] = useState<Track | null>(null);

  return (
    <div className="step2-combined">
      <StepProgress step={2} total={2} onBack={() => navigate('/step1')} />

      <div className="step2-combined__content">
        <div className="step2-combined__board">
          <span className="step2-combined__board-label">Choose your board</span>
          <div className="step2-combined__pills">
            {BOARDS.map((b) => (
              <button
                key={b}
                type="button"
                className={`step2-combined__pill ${board === b ? 'step2-combined__pill--active' : ''}`}
                onClick={() => setBoard(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="step2-combined__track-head">
          <h1 className="step2-combined__title">Choose your track</h1>
          <p className="step2-combined__subtitle">
            Select the learning path that best aligns with your academic goals.
          </p>
        </div>

        <div className="step2-combined__cards">
          <button
            type="button"
            className={`step2-combined__card step2-combined__card--ncert ${track === 'ncert-deca' ? 'step2-combined__card--selected' : ''}`}
            onClick={() => setTrack('ncert-deca')}
          >
            <div className="step2-combined__ncert-bg" />
            <div className="step2-combined__ncert-blur step2-combined__ncert-blur--t" />
            <div className="step2-combined__ncert-blur step2-combined__ncert-blur--b" />
            <div className="step2-combined__ncert-inner">
              <div className="step2-combined__ncert-header">
                <div className="step2-combined__ncert-brand">
                  <div className="step2-combined__ncert-icon-wrap">
                    <span className="material-symbols-outlined" aria-hidden="true">auto_awesome</span>
                  </div>
                  <div className="step2-combined__ncert-titles">
                    <h3 className="step2-combined__ncert-name">NCERT</h3>
                    <div className="step2-combined__ncert-tag">
                      <span className="material-symbols-outlined step2-combined__star" aria-hidden="true">star</span>
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
                <div className={`step2-combined__radio ${track === 'ncert-deca' ? 'step2-combined__radio--on' : ''}`}>
                  <div className="step2-combined__radio-dot" />
                </div>
              </div>
              <div className="step2-combined__deca">
                <div className="step2-combined__deca-head">
                  <span className="material-symbols-outlined step2-combined__deca-icon" aria-hidden="true">view_in_ar</span>
                  <span className="step2-combined__deca-title">DECA</span>
                </div>
                <div className="step2-combined__deca-bullets">
                  {DECA_BULLETS.map((item) => (
                    <div key={item.icon} className="step2-combined__deca-bullet">
                      <div className="step2-combined__deca-bullet-icon">
                        <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                      </div>
                      <span className={item.italic ? 'step2-combined__deca-bullet-text step2-combined__deca-bullet-text--em' : 'step2-combined__deca-bullet-text'}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="step2-combined__deca-divider" />
                <p className="step2-combined__deca-desc">
                  Immersive way of learning! Experience concepts like never before.
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            className={`step2-combined__card step2-combined__card--plain ${track === 'foundation' ? 'step2-combined__card--selected' : ''}`}
            onClick={() => setTrack('foundation')}
          >
            <div className="step2-combined__plain-row">
              <span className="step2-combined__plain-icon">
                <span className="material-symbols-outlined" aria-hidden="true">architecture</span>
              </span>
              <div className="step2-combined__plain-text">
                <h3 className="step2-combined__plain-title">Foundation</h3>
                <p className="step2-combined__plain-desc">
                  Specialized curriculum designed for advanced competitive exam preparation.
                </p>
              </div>
              <div className={`step2-combined__radio step2-combined__radio--plain ${track === 'foundation' ? 'step2-combined__radio--on' : ''}`}>
                <div className="step2-combined__radio-dot" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="step2-combined__footer">
        <Button
          variant="primary"
          onClick={() => (track === 'ncert-deca' ? navigate('/ncert-home') : navigate('/'))}
          disabled={!board || !track}
        >
          GET STARTED →
        </Button>
      </div>
    </div>
  );
}
