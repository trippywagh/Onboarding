import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import './OTPScreen.css';

const OTP_LENGTH = 4;

export function OTPScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [resendSeconds] = useState(47);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (value.length > 1) {
        const digits = value.replace(/\D/g, '').slice(0, OTP_LENGTH).split('');
        const next = [...otp];
        digits.forEach((d, i) => {
          if (index + i < OTP_LENGTH) next[index + i] = d;
        });
        setOtp(next);
        const focusIndex = Math.min(index + digits.length, OTP_LENGTH - 1);
        inputRefs.current[focusIndex]?.focus();
        return;
      }
      const digit = value.replace(/\D/g, '').slice(-1);
      const next = [...otp];
      next[index] = digit;
      setOtp(next);
      if (digit && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
    },
    [otp]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [otp]
  );

  const handleSubmit = () => navigate('/step1');

  const isOtpComplete = otp.every((d) => d !== '');

  return (
    <div className="otp-screen">
      <div className="otp-screen__illustration">
        <div className="otp-illus otp-illus--1" />
        <div className="otp-illus otp-illus--2" />
        <div className="otp-illus otp-illus--3" />
      </div>

      <div className="otp-screen__card">
        <h1 className="otp-screen__title">Enter OTP</h1>
        <p className="otp-screen__subtitle">
          OTP is sent to +9975666745 <a href="#change">CHANGE</a>
        </p>

        <div className="otp-screen__inputs">
          {Array.from({ length: OTP_LENGTH }).map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="tel"
              inputMode="numeric"
              maxLength={4}
              className="otp-input"
              value={otp[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
            />
          ))}
        </div>

        <p className="otp-screen__resend">Resend OTP IN 00:{String(resendSeconds).padStart(2, '0')}</p>

        <Button variant="primary" onClick={handleSubmit} disabled={!isOtpComplete}>
          Submit
        </Button>
      </div>
    </div>
  );
}
