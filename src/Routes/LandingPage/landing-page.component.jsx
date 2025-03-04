import "./landing-page.styles.scss";
import Authentication from "../Authentication/auth-component";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Roomie</h1>
        <p>Find your Place</p>
        <h2>To get started, Login or SignUp</h2>
      </header>
      <div className="auth-container">
        <Authentication />
      </div>
      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>Details about feature one.</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>Details about feature two.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Details about feature three.</p>
        </div>
      </section>
    </div>
  );
}
