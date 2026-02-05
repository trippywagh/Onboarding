# ALLEN Onboarding – Frontend Prototype

Mobile onboarding journey prototype for **Android large frame** (412×915 px), portrait. Each screen is in its own file for easy navigation and editing.

## Run

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Screens

| Route   | File           | Description                          |
|---------|----------------|--------------------------------------|
| `/`     | `LoginScreen`  | Hero, mobile input, Form ID / Email  |
| `/otp`  | `OTPScreen`    | OTP entry, resend timer, Submit      |
| `/step1`| `Step1Screen`  | Name, target class (9–12)           |
| `/step2`| `Step2Screen`  | Board selection (CBSE, ICSE, etc.)  |
| `/step3`| `Step3Screen`  | Track: NCERT/DECA vs Foundation      |

Use the **top nav** to jump between screens, or follow the in-app flow (Continue → OTP → Step 1 → Step 2 → Step 3 → GET STARTED).

## Structure

- **`src/screens/`** – One file per screen (`LoginScreen.tsx`, `OTPScreen.tsx`, etc.).
- **`src/components/`** – Shared UI: `PhoneFrame`, `Button`, `Input`, `StepProgress`, `PrototypeNav`.
- **`src/styles/`** – Design tokens and global styles for consistent spacing, colors, and typography.

## Build

```bash
npm run build
```

Output is in `dist/`.
