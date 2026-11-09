import LoginBrandPanel from "../components/auth/LoginBrandPanel.jsx";
import LoginForm from "../components/auth/LoginForm.jsx";
import { useApp } from "../context/AppContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function LoginPage() {
  const { login } = useApp();
  const toast = useToast();
  return (
    <main className="login-page">
      <LoginBrandPanel />
      <LoginForm
        onLogin={login}
        onCreateAccount={() => toast("Account creation needs a connected backend. Log in with any email to try the demo.")}
      />
    </main>
  );
}
