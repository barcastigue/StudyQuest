import Brand from "../layout/Brand.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";

export default function LoginBrandPanel() {
  return (
    <section className="login-brand">
      <Brand className="brand-mark light" size={22} />
      <div className="login-copy">
        <Eyebrow as="div" light>
          A better way to review
        </Eyebrow>
        <h1>
          Turn your notes
          <br />
          into quizzes.
        </h1>
        <p>Small study sessions. Big progress.</p>
      </div>
      <div className="paper-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
