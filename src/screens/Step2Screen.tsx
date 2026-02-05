import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepProgress } from '@/components/ui/StepProgress';
import { Button } from '@/components/ui/Button';
import './Step2Screen.css';

const BOARDS = [
  { id: 'cbse', label: 'CBSE', icon: '🎓' },
  { id: 'icse', label: 'ICSE', icon: '📖' },
  { id: 'state', label: 'State Board', icon: '🏛️' },
  { id: 'others', label: 'Others', icon: '⋯' },
];

export function Step2Screen() {
  const navigate = useNavigate();
  const [board, setBoard] = useState<string>('');

  return (
    <div className="step2-screen">
      <StepProgress step={2} total={3} onBack={() => navigate('/step1')} />

      <div className="step2-screen__content">
        <div className="step2-screen__icon">
          <div className="step2-icon-circle">
            <span className="step2-icon">📚</span>
          </div>
        </div>
        <h1 className="step2-screen__title">Which board are you studying in</h1>
        <p className="step2-screen__subtitle">
          Select your educational board to customize your learning journey.
        </p>

        <div className="step2-screen__grid">
          {BOARDS.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`step2-screen__card ${board === b.id ? 'step2-screen__card--active' : ''}`}
              onClick={() => setBoard(b.id)}
            >
              <span className="step2-screen__card-icon">{b.icon}</span>
              <span className="step2-screen__card-label">{b.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="step2-screen__footer">
        <Button
          variant="primary"
          onClick={() => navigate('/step3')}
          disabled={!board}
        >
          NEXT STEP
        </Button>
      </div>
    </div>
  );
}
