import React from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'disabled';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = true,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const v = disabled ? 'disabled' : variant;
  return (
    <button
      type={type}
      className={`btn btn--${v} ${fullWidth ? 'btn--full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
