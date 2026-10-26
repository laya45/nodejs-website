
import Link from "next/link";

export const metadata = {
  title: "Services | Nexora Digital",
  description: "Explore web development, UI/UX, marketing, and digital consulting.",
};

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Responsive websites and modern web applications designed for performance and scalability.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces and user journeys that make digital products easier to use.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Practical digital marketing strategies to improve your online reach and visibility.",
  },
  {
    icon: "⚙️",
    title: "API Integration",
    description:
      "Connect applications and services to create efficient digital workflows.",
  },
  {
    icon: "🔎",
    title: "SEO Optimization",
    description:
      "Improve site structure, discoverability, accessibility, and search engine readiness.",
  },
  {
    icon: "🧠",
    title: "Digital Consulting",
    description:
      "Get guidance on technology choices, project planning, and digital transformation.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="inner-page">
        <div className="section-heading">
          <span className="eyebrow">OUR SERVICES</span>
          <h2>Everything you need to grow digitally.</h2>
          <p>
            Choose the right combination of services for your business,
            your customers, and your goals.
          </p>
        </div>

        <div className="services-grid" style={{ marginTop: 50 }}>
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/contact" className="text-link">
                Discuss your project ↗
              </Link>
            </article>
          ))}
        </div>

        <div className="center-action">
          <Link href="/contact" className="button button-primary">
            Request a Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
