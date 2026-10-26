
"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="inner-page">
        <div className="section-heading">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Tell us about your next big idea.</h2>
          <p>
            Share a few details about your project, and explore how
            Nexora Digital could help.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
        >
          <input
            className="form-field"
            type="text"
            name="name"
            placeholder="Your full name"
            aria-label="Your full name"
            minLength={2}
            required
          />

          <input
            className="form-field"
            type="email"
            name="email"
            placeholder="Your email address"
            aria-label="Your email address"
            required
          />

          <select
            className="form-field"
            name="service"
            aria-label="Select a service"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="API Integration">API Integration</option>
            <option value="Digital Consulting">Digital Consulting</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            className="form-field"
            name="message"
            placeholder="Tell us about your project"
            aria-label="Project details"
            rows={5}
            minLength={10}
            required
          />

          <button type="submit" className="button button-primary">
            Send Message →
          </button>

          {submitted && (
            <p className="form-message" role="status">
              Thank you for reaching out! Your form passed validation.
              This demo does not send or store your message.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
