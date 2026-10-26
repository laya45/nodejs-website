
import Link from "next/link";

export const metadata = {
  title: "About Us | Nexora Digital",
  description: "Learn about Nexora Digital and our mission.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <div className="section-heading">
        <span className="eyebrow">ABOUT NEXORA</span>
        <h2>We turn ideas into digital experiences.</h2>
        <p>
          We combine creativity, technology, and strategy to help
          businesses grow and deliver better digital experiences.
        </p>
        <div style={{ marginTop: 28 }}>
          <Link href="/services" className="button button-primary">
            Explore Our Services →
          </Link>
        </div>
      </div>

      <div className="services-grid" style={{ marginTop: 50 }}>
        <article className="service-card">
          <div className="service-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>Deliver useful digital solutions that help businesses succeed.</p>
        </article>

        <article className="service-card">
          <div className="service-icon">🔭</div>
          <h3>Our Vision</h3>
          <p>Create digital experiences that make a lasting difference.</p>
        </article>

        <article className="service-card">
          <div className="service-icon">🤝</div>
          <h3>Our Values</h3>
          <p>Build with creativity, transparency, and collaboration.</p>
        </article>
      </div>
    </main>
  );
}
