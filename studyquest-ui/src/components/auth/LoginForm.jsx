import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Brand from "../layout/Brand.jsx";
import Button from "../ui/Button.jsx";
import ErrorBanner from "../ui/ErrorBanner.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Field from "../ui/Field.jsx";
import { isEmail, isPassword, isUsername } from "../../utils/validators.js";
import { loginRequest, registerRequest } from "../../api/auth.js";

//Login + register in one form. 
export default function LoginForm({ onSuccess, onRegistered }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const isRegister = mode === "register";
  const usernameInvalid = submitted && isRegister && !isUsername(username);
  const emailInvalid = submitted && !isEmail(email);
  const passwordInvalid = submitted && !isPassword(password);

  const switchMode = () => {
    setMode(isRegister ? "login" : "register");
    setSubmitted(false);
    setServerError("");
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setServerError("");
    const valid = isEmail(email) && isPassword(password) && (!isRegister || isUsername(username));
    if (!valid) return;

    setLoading(true);
    try {
      if (isRegister) {
        await registerRequest(username.trim(), email.trim(), password);
        setMode("login");
        setPassword("");
        setSubmitted(false);
        onRegistered?.();
      } else {
        const account = await loginRequest(email.trim(), password);
        onSuccess(account);
      }
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-form-wrap">
      <form className="login-form" onSubmit={submit} noValidate>
        <Brand className="mobile-brand brand-mark" />
        <div>
          <Eyebrow as="div">{isRegister ? "Join StudyQuest" : "Welcome back"}</Eyebrow>
          <h2>{isRegister ? "Start your first quest" : "Ready for your next quest?"}</h2>
          <p className="muted">
            {isRegister ? "Create an account to begin." : "Log in to pick up where you left off."}
          </p>
        </div>

        {serverError && (
          <ErrorBanner title={isRegister ? "Couldn't create account" : "Couldn't log in"} onDismiss={() => setServerError("")}>
            {serverError}
          </ErrorBanner>
        )}

        {isRegister && (
          <Field label="Username" error={usernameInvalid && "Please enter a username (max 50 characters)."}>
            <input
              className={usernameInvalid ? "invalid" : ""}
              type="text"
              autoComplete="username"
              placeholder="alexkim"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Field>
        )}

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
            autoComplete={isRegister ? "new-password" : "current-password"}
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Button type="submit" className="full" disabled={loading}>
          {loading ? "Please wait..." : isRegister ? "Create account" : "Log in"} <ArrowRight size={17} />
        </Button>

        <p className="form-foot">
          {isRegister ? "Already have an account?" : "New here?"}{" "}
          <button type="button" onClick={switchMode}>
            {isRegister ? "Log in" : "Create an account"}
          </button>
        </p>
      </form>
    </section>
  );
}
