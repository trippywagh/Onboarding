import './Input.css';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'tel' | 'email';
  maxLength?: number;
  className?: string;
  disabled?: boolean;
}

export function Input({
  placeholder,
  value = '',
  onChange,
  type = 'text',
  maxLength,
  className = '',
  disabled = false,
}: InputProps) {
  return (
    <input
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      maxLength={maxLength}
      disabled={disabled}
    />
  );
}
