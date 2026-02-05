import React from 'react';
import './PhoneFrame.css';

const PHONE_WIDTH = 412;
const PHONE_HEIGHT = 915;

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{
        width: PHONE_WIDTH,
        height: PHONE_HEIGHT,
      }}
    >
      <div className="phone-frame__notch" />
      <div className="phone-frame__screen">{children}</div>
    </div>
  );
}
