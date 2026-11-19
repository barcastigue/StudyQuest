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
        onSuccess={login}
        onRegistered={() => toast("Account created! You can log in now.")}
      />
    </main>
  );
}
