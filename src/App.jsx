import { useState } from 'react'
import './App.css'

const logo = '/logo.jpg'
// IMPORTANT: Replace with your actual business email before publishing.
const BUSINESS_EMAIL = ''

const faqs = [
  {
    q: 'What types of bins do you clean?',
    a: 'We welcome inquiries for household trash bins, recycling bins, and commercial waste containers. Share your bin type and size when requesting a quote so we can confirm the right service.',
    open: true,
  },
  {
    q: 'How often should my bins be cleaned?',
    a: 'It depends on how often you use your bins and how quickly odors or residue build up. We can discuss one-time and recurring cleaning options when you get in touch.',
  },
  {
    q: 'Do I need to be home for the cleaning?',
    a: 'Contact us before scheduling. We can discuss bin accessibility and any instructions needed for your particular property.',
  },
  {
    q: 'How much does bin cleaning cost?',
    a: 'Pricing depends on the number and type of bins, location, and cleaning needs. Submit the form below to request a personalized quote.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'Tell us your city or ZIP code when you contact us and we\'ll confirm whether service is available in your area.',
  },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const year = new Date().getFullYear()

  function closeNav() {
    setNavOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = 'JC Trash Bin Cleaner - New Quote Request'
    const body = `Name: ${data.get('name')}
Phone: ${data.get('phone') || 'Not provided'}
Email: ${data.get('email')}
Service: ${data.get('service')}
Bins: ${data.get('bins')}

Additional details:
${data.get('message') || 'None'}`

    if (!BUSINESS_EMAIL) {
      setFormStatus(
        'Demo mode: Your request is ready. Please add your business email in the website code before going live.',
      )
      return
    }

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormStatus('Your email app should open with your quote request ready to send.')
  }

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>

      <header>
        <div className="wrap nav">
          <a href="#home" className="brand" aria-label="JC Trash Bin Cleaner homepage">
            <img src={logo} alt="JC Trash Bin Cleaner logo" />
            <strong>
              JC TRASH BIN
              <span>CLEANER</span>
            </strong>
          </a>

          <nav
            id="navLinks"
            className={`links${navOpen ? ' open' : ''}`}
            aria-label="Main menu"
          >
            <a href="#services" onClick={closeNav}>
              Services
            </a>
            <a href="#how-it-works" onClick={closeNav}>
              How It Works
            </a>
            <a href="#why-us" onClick={closeNav}>
              Why Us
            </a>
            <a href="#faq" onClick={closeNav}>
              FAQs
            </a>
            <a href="#contact" onClick={closeNav}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-green btn-small" href="#contact">
              Get a Free Quote <span aria-hidden="true">↗</span>
            </a>
            <button
              className="hamburger"
              type="button"
              aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={navOpen}
              onClick={() => setNavOpen((open) => !open)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="wrap hero-inner">
            <div>
              <span className="eyebrow">
                <span className="dot" /> Professional Trash Bin Cleaning
              </span>
              <h1>
                Dirty Bins?
                <br />
                <em>
                  We Make
                  <br />
                  Them Shine.
                </em>
              </h1>
              <p>
                Say goodbye to stubborn grime, unpleasant odors, and messy trash
                cans. JC Trash Bin Cleaner brings a fresh, clean feeling right to
                your curb.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-green">
                  Get My Free Quote <span>↗</span>
                </a>
                <a href="#how-it-works" className="btn btn-white">
                  See How It Works <span>→</span>
                </a>
              </div>
              <div className="hero-benefits">
                <span>
                  <b>✓</b> Thorough Cleaning
                </span>
                <span>
                  <b>✓</b> Odor Reduction
                </span>
                <span>
                  <b>✓</b> Convenient Service
                </span>
              </div>
            </div>

            <div className="hero-art">
              <div className="hero-ring" />
              <img
                className="hero-logo"
                src="/hero-mascot.png"
                alt="JC Trash Bin Cleaner mascot pressure washing trash bins"
              />
              <div className="float-note">
                <i>✦</i>
                <span>
                  Clean Bins. Happy Home.
                  <small>A fresher curb starts here</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="trust">
          <div className="wrap trust-row">
            <strong>More than clean. A fresher everyday.</strong>
            <div className="trust-list">
              <span>
                <b>✦</b> Residential Bins
              </span>
              <span>
                <b>✦</b> Commercial Bins
              </span>
              <span>
                <b>✦</b> Reliable Service
              </span>
            </div>
          </div>
        </div>

        <section className="section" id="services">
          <div className="wrap">
            <div className="center">
              <span className="kicker">What we do</span>
              <h2>
                Big clean for your
                <br />
                hardest-working bins.
              </h2>
              <p className="lead">
                From everyday household cans to busy commercial containers, we
                help keep trash bins cleaner, fresher, and easier to live with.
              </p>
            </div>
            <div className="services">
              <article className="service">
                <div className="ico">🗑️</div>
                <h3>Residential Bin Cleaning</h3>
                <p>
                  Give your household trash and recycling bins a deep refresh,
                  without the dirty work on your end.
                </p>
                <a className="tag" href="#contact">
                  Request a quote →
                </a>
              </article>
              <article className="service">
                <div className="ico">💦</div>
                <h3>Deep Wash &amp; Rinse</h3>
                <p>
                  Focused washing tackles stuck-on residue and buildup that a
                  quick garden-hose rinse can leave behind.
                </p>
                <a className="tag" href="#contact">
                  Request a quote →
                </a>
              </article>
              <article className="service">
                <div className="ico">✨</div>
                <h3>Commercial Bin Care</h3>
                <p>
                  Help maintain cleaner waste areas for offices, shops, and other
                  properties with bin cleaning tailored to your needs.
                </p>
                <a className="tag" href="#contact">
                  Request a quote →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="how-it-works">
          <div className="wrap two">
            <div className="process-visual">
              <span className="bubble one">✧</span>
              <span className="bubble two">✧</span>
              <span className="bubble three">✦</span>
              <div className="bin">
                <span className="bin-wheels" />
              </div>
              <div className="visual-label">✨ The fresh-bin feeling</div>
            </div>
            <div>
              <span className="kicker" style={{ color: '#b9f18f' }}>
                Simple from start to finish
              </span>
              <h2>
                A clean bin in
                <br />
                3 easy steps.
              </h2>
              <p className="lead">
                No complicated process. Just a simple way to make your bins a lot
                more pleasant.
              </p>
              <div className="steps">
                <div className="step">
                  <span className="step-n">01</span>
                  <div>
                    <h3>Request your quote</h3>
                    <p>
                      Tell us how many bins you have and what type of cleaning
                      you need.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-n">02</span>
                  <div>
                    <h3>Schedule your service</h3>
                    <p>
                      We&apos;ll coordinate a convenient time and confirm the
                      details with you.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-n">03</span>
                  <div>
                    <h3>Enjoy the fresh result</h3>
                    <p>
                      We wash away grime and buildup so your bins look and smell
                      better.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="btn btn-green" style={{ marginTop: 31 }}>
                Book a Cleaning <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section why" id="why-us">
          <div className="wrap two">
            <div>
              <span className="kicker">The JC difference</span>
              <h2>
                Because even your
                <br />
                trash bins deserve
                <br />
                some TLC.
              </h2>
              <p className="lead">
                Your bins work hard. Cleaning them yourself shouldn&apos;t have to
                be another chore on your list.
              </p>
              <div className="why-grid">
                <div className="why-item">
                  <div className="why-icon">💧</div>
                  <div>
                    <b>Deep Cleaning</b>
                    <p>Careful washing where grime likes to hide.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">🌿</div>
                  <div>
                    <b>Fresher Spaces</b>
                    <p>Less lingering bin odor around your home.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">⏱️</div>
                  <div>
                    <b>Save Your Time</b>
                    <p>Skip a messy, unpleasant weekend chore.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">🤝</div>
                  <div>
                    <b>Easy to Arrange</b>
                    <p>Simple communication and convenient scheduling.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-quote">
              <span className="over">A little clean goes a long way</span>
              <h3>From “hold your breath” to “what a difference!”</h3>
              <p>
                Trash bins shouldn&apos;t be the thing you dread walking past.
                Whether it&apos;s one bin or several, JC Trash Bin Cleaner is here
                to help bring back that fresh, just-cleaned feeling.
              </p>
              <div className="bigcheck">✓</div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap faq-grid">
            <div>
              <span className="kicker">Good to know</span>
              <h2>Frequently asked questions.</h2>
              <p className="lead">
                Still have a question? Send us a message and we&apos;ll help you
                figure out the right service.
              </p>
              <a className="btn btn-outline" href="#contact" style={{ marginTop: 16 }}>
                Ask Us a Question →
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q} open={item.open || undefined}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap two">
            <div>
              <span className="kicker" style={{ color: '#b9f18f' }}>
                Let&apos;s get cleaning
              </span>
              <h2>
                Ready for bins that
                <br />
                feel brand new?
              </h2>
              <p className="lead">
                Leave the dirty work to JC Trash Bin Cleaner. Tell us a little
                about your bins and we&apos;ll help you take the next step.
              </p>
              <div className="contact-perks">
                <span>
                  <b>✓</b> Quick and simple inquiry
                </span>
                <span>
                  <b>✓</b> Personalized cleaning quote
                </span>
                <span>
                  <b>✓</b> No-obligation conversation
                </span>
              </div>
            </div>

            <div className="form-card">
              <h3>Get Your Free Quote</h3>
              <p>Fill out the details below to prepare your inquiry.</p>
              <form onSubmit={handleSubmit}>
                <div className="fields">
                  <div className="field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="field full">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service Needed *</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="">Select service</option>
                      <option>Residential Bin Cleaning</option>
                      <option>Deep Wash &amp; Rinse</option>
                      <option>Commercial Bin Care</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="bins">Number of Bins</label>
                    <select id="bins" name="bins" defaultValue="1 Bin">
                      <option>1 Bin</option>
                      <option>2 Bins</option>
                      <option>3–5 Bins</option>
                      <option>6+ Bins</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="message">Location / Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="City or ZIP code, bin sizes, and anything else we should know..."
                    />
                  </div>
                </div>
                <button className="btn btn-green" type="submit">
                  Prepare My Quote Request ↗
                </button>
                <p className="form-status" role="status" aria-live="polite">
                  {formStatus}
                </p>
                <div className="form-note">
                  This demo form prepares an email in your mail app. Add your
                  business email to the site settings before publishing to receive
                  inquiries directly.
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <img src={logo} alt="JC logo" /> JC Trash Bin Cleaner
              </div>
              <p className="footer-text">
                Helping make trash day a little fresher, one bin at a time.
                Professional bin cleaning with a focus on convenience and care.
              </p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#how-it-works">Our Process</a>
              <a href="#faq">FAQs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {year} JC Trash Bin Cleaner. All rights reserved.</span>
            <span>Clean bins. Fresher living. ✦</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
