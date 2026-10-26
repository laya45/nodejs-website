
import Link from "next/link";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Fast, responsive websites and powerful web applications built for your business.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Intuitive and beautiful user experiences that turn visitors into customers.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Data-driven digital strategies to grow your audience and strengthen your brand.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <Link href="/" className="logo">
          nexora<span>.</span>
        </Link>

        <nav className="nav-links">
          <Link className="active" href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="button button-primary nav-cta">
          Let&apos;s Talk ↗
        </Link>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            YOUR DIGITAL GROWTH PARTNER
          </span>

          <h1>
            Ideas into impact.
            <br />
            <span>Built for what&apos;s next.</span>
          </h1>

          <p>
            We combine creativity, technology, and strategy to help
            ambitious businesses build better digital experiences and
            achieve meaningful growth.
          </p>

          <div className="hero-actions">
            <Link href="/services" className="button button-primary">
              Explore Our Services →
            </Link>

            <Link href="/about" className="button button-outline">
              Discover Nexora
            </Link>
          </div>

          <div className="stats">
            <div>
              <strong>50+</strong>
              <span>Projects delivered</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>Happy clients</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Nexora brand illustration">
          <div className="orb">
            <span>N</span>
          </div>
          <div className="floating-card floating-top">
            <span className="status-dot" />
            Creative solutions
          </div>
          <div className="floating-card floating-bottom">
            ↗ Growth starts here
          </div>
          <div className="decorative-circle" />
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Solutions designed around your goals.</h2>
          <p>
            We bring the right mix of creativity and technology to
            move your business forward.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/services" className="text-link">
                Learn more <span>↗</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="center-action">
          <Link href="/services" className="button button-outline">
            View All Services →
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <span className="eyebrow">LET&apos;S CREATE SOMETHING GREAT</span>
        <h2>Your next big idea starts here.</h2>
        <p>
          Have a project in mind? Let&apos;s discuss how we can help
          turn your vision into reality.
        </p>
        <Link href="/contact" className="button button-light">
          Start a Conversation →
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <Link href="/" className="logo">
              nexora<span>.</span>
            </Link>
            <p>Creative thinking. Smart technology. Real results.</p>
          </div>

          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="copyright">
  © 2026 Nexora Digital. All rights reserved.
</div>
      </footer>
    </main>
  );
}
