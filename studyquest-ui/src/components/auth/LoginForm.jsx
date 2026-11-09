import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Brand from "../layout/Brand.jsx";
import Button from "../ui/Button.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Field from "../ui/Field.jsx";
import { isEmail, isPassword } from "../../utils/validators.js";

export default function LoginForm({ onLogin, onCreateAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailInvalid = submitted && !isEmail(email);
  const passwordInvalid = submitted && !isPassword(password);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isEmail(email) && isPassword(password)) onLogin();
  };

  return (
    <section className="login-form-wrap">
      <form className="login-form" onSubmit={submit} noValidate>
        <Brand className="mobile-brand brand-mark" />
        <div>
          <Eyebrow as="div">Welcome back</Eyebrow>
          <h2>Ready for your next quest?</h2>
          <p className="muted">Log in to pick up where you left off.</p>
        </div>
        <Field label="Email address" error={emailInvalid && "Please enter a valid email address."}>
          <input
            className={emailInvalid ? "invalid" : ""}
            type="email"
            autoComplete="email"
            placeholder="alex@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label="Password" error={passwordInvalid && "Your password must be at least 8 characters."}>
          <input
            className={passwordInvalid ? "invalid" : ""}
            type="password"
            autoComplete="current-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Button type="submit" className="full">
          Log in <ArrowRight size={17} />
        </Button>
        <p className="form-foot">
          New here?{" "}
          <button type="button" onClick={onCreateAccount}>
            Create an account
          </button>
        </p>
      </form>
    </section>
  );
}
