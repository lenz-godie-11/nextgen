import { useState, type FormEvent } from 'react'

const details = [
  { icon: '@', label: 'Email', value: 'Official email address (placeholder)' },
  { icon: '#', label: 'Phone', value: 'Official phone number (placeholder)' },
  { icon: '◎', label: 'Location', value: 'Official location / address (placeholder)' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact">
          <div className="contact__intro">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Contact us</p>
              <h2 id="contact-title" className="contact__title">
                Let&apos;s explore problems worth <span className="highlight">solving</span>
              </h2>
              <p className="lead">
                Reach out to learn more about NEXT GEN INNOVATORS, discuss ideas, or connect around
                future innovation opportunities.
              </p>
            </div>

            <div className="contact__details">
              {details.map((item) => (
                <div className="contact__item" key={item.label}>
                  <span className="contact__item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>
                    <span className="contact__item-label">{item.label}</span>
                    <span className="contact__item-value">{item.value}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="contact__note">
              Contact details use placeholders until official company information is confirmed.
            </p>
          </div>

          <div className="contact__form-wrap">
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <p className="form__note">
                This form is a front-end placeholder. Connect it to your preferred email or backend
                service before collecting live submissions.
              </p>
              <button type="submit" className="btn btn--primary">
                Send Message
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>
              {submitted ? (
                <p className="form__status" role="status">
                  Message draft captured locally. Add a backend or form service to deliver
                  submissions.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}