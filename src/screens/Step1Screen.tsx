import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepProgress } from '@/components/ui/StepProgress';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import './Step1Screen.css';

const CLASSES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', '12+'];

export function Step1Screen() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [targetClass, setTargetClass] = useState('');

  return (
    <div className="step1-screen">
      <StepProgress step={1} total={2} onBack={() => navigate('/otp')} />

      <div className="step1-screen__content">
        <div className="step1-screen__illustration">
          <div className="step1-illus-glow" />
          <div className="step1-illus-circle">
            <span className="material-symbols-outlined step1-illus-icon" aria-hidden="true">emoji_objects</span>
          </div>
          <div className="step1-illus-stand" />
        </div>
        <h1 className="step1-screen__title">Let's get started!</h1>
        <p className="step1-screen__subtitle">
          Tell us a bit about yourself to personalize your experience.
        </p>

        <label className="step1-screen__label">Student's Name</label>
        <div className="step1-screen__input-wrap">
          <span className="step1-screen__input-icon">👤</span>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={setName}
            className="step1-screen__name-input"
          />
        </div>

        <label className="step1-screen__label">Target Class</label>
        <div className="step1-screen__grid">
          {CLASSES.map((c) => (
            <button
              key={c}
              type="button"
              className={`step1-screen__class-btn ${targetClass === c ? 'step1-screen__class-btn--active' : ''}`}
              onClick={() => setTargetClass(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="step1-screen__footer">
        {targetClass && (
          <div className="step1-screen__message">
            <span className="material-symbols-outlined step1-screen__message-icon" aria-hidden="true">calendar_today</span>
            <p className="step1-screen__message-text">
              You will be in <span className="step1-screen__message-highlight">{targetClass}</span> starting in April 2026
            </p>
          </div>
        )}
        <Button
          variant="primary"
          onClick={() => navigate('/step2')}
          disabled={!name.trim() || !targetClass}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
