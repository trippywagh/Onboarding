import './StepProgress.css';

interface StepProgressProps {
  step: number;
  total: number;
  onBack?: () => void;
}

export function StepProgress({ step, total, onBack }: StepProgressProps) {
  const progress = (step / total) * 100;
  return (
    <div className="step-progress">
      <button type="button" className="step-progress__back" onClick={onBack} aria-label="Back">
        ←
      </button>
      <div className="step-progress__label">
        STEP {step} OF {total}
      </div>
      <div className="step-progress__bar">
        <div className="step-progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
