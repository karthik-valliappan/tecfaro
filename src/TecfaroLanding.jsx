const features = [
  {
    title: 'Signal-first workspace',
    description:
      'Scan open interest, volume, and price action in a layout designed to surface what matters first.',
    accent: 'OI + Flow',
  },
  {
    title: 'Live market pulse',
    description:
      'Track shifting liquidity, momentum, and positioning before they become obvious on standard dashboards.',
    accent: 'Low-latency',
  },
  {
    title: 'Smarter alerts',
    description:
      'Receive focused notifications on unusual activity, volatility changes, and concentration risk.',
    accent: 'Context aware',
  },
  {
    title: 'AI-assisted insight',
    description:
      'Add explainable context around derivatives moves so teams can discuss scenarios faster and with less noise.',
    accent: 'Narrative layer',
  },
  {
    title: 'Desk-ready design',
    description:
      'Built for active use with clear hierarchy, large touch targets, and strong keyboard accessibility.',
    accent: 'Accessible UI',
  },
  {
    title: 'Cloud-native scale',
    description:
      'Run a modern analytics product on infrastructure ready for growth, reliability, and simple deployment.',
    accent: 'Pages ready',
  },
]

const useCases = [
  {
    title: 'Trend confirmation',
    description:
      'Validate momentum trades with positioning context before committing more size.',
  },
  {
    title: 'Risk calibration',
    description:
      'Read unusual options concentration and delta changes to tighten execution decisions.',
  },
  {
    title: 'Desk collaboration',
    description:
      'Share a common view of flow, sentiment, and price response across analysts and traders.',
  },
  {
    title: 'Faster briefings',
    description:
      'Turn raw derivatives movement into concise, decision-ready commentary for the team.',
  },
]

const stats = [
  { value: '24/7', label: 'monitoring mindset' },
  { value: '<1s', label: 'alert target' },
  { value: '3 layers', label: 'flow, OI, and price context' },
]

const highlights = [
  'Purpose-built for derivatives traders and analytics teams.',
  'Modern visual hierarchy with clearer contrast and cleaner spacing.',
  'Focused workflows that help teams act with more confidence.',
]

export default function TecfaroLanding() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a className="brand-mark" href="#top" aria-label="Tecfaro home">
            <span className="brand-mark__dot" aria-hidden="true" />
            Tecfaro
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm md:flex"
          >
            <a className="nav-link" href="#features">
              Features
            </a>
            <a className="nav-link" href="#use-cases">
              Use Cases
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          <a
            className="cta-button cta-button--ghost"
            href="mailto:support@tecfaro.com?subject=Tecfaro%20Contact"
          >
            Talk to us
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section px-4 pb-14 pt-8 sm:px-6 lg:px-8">
          <div className="hero-orb hero-orb--left" aria-hidden="true" />
          <div className="hero-orb hero-orb--right" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(460px,1.04fr)] lg:items-center">
            <div className="pt-10 lg:pt-16">
              <p className="eyebrow">Real-time derivatives intelligence</p>
              <h1 className="hero-title">
                A sharper, more modern way to read market structure from open
                interest, flow, and price action.
              </h1>
              <p className="hero-copy">
                Tecfaro helps trading teams move from scattered signals to a
                confident operating view with live analytics, cleaner decision
                support, and faster market context.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="cta-button cta-button--primary"
                  href="mailto:support@tecfaro.com?subject=Start%20Free%20Trial"
                >
                  Start free trial
                </a>
                <a
                  className="cta-button cta-button--secondary"
                  href="mailto:support@tecfaro.com?subject=Request%20Demo"
                >
                  Request demo
                </a>
              </div>

              <ul className="hero-points" aria-label="Key benefits">
                <li>Cleaner visual hierarchy for faster scanning</li>
                <li>Accessible interactions across keyboard and touch</li>
              </ul>
            </div>

            <aside className="hero-panel" aria-labelledby="snapshot-title">
              <div className="hero-panel__topline">
                <span className="status-pill">Live market snapshot</span>
                <span className="status-note">Updated continuously</span>
              </div>

              <h2 id="snapshot-title" className="hero-panel__title">
                Designed to feel like a modern trading surface, not a generic
                startup template.
              </h2>

              <div className="hero-grid">
                <div className="hero-grid__card hero-grid__card--feature">
                  <p className="hero-grid__label">Primary layer</p>
                  <p className="hero-grid__value">Open interest shifts</p>
                  <p className="hero-grid__copy">
                    Surface positioning changes before they ripple into broader
                    price behavior.
                  </p>
                </div>

                <div className="hero-grid__card">
                  <p className="hero-grid__label">Secondary signal</p>
                  <p className="hero-grid__value">Flow anomalies</p>
                </div>

                <div className="hero-grid__card">
                  <p className="hero-grid__label">Decision view</p>
                  <p className="hero-grid__value">Risk context</p>
                </div>

                <div className="hero-grid__card hero-grid__card--tall">
                  <p className="hero-grid__label">Platform highlights</p>
                  <ul className="hero-list">
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section aria-label="Key platform metrics" className="metrics-section px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="metric-card">
                <p className="metric-card__value">{stat.value}</p>
                <p className="metric-card__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="section-intro">
              <p className="section-label">Features</p>
              <h2 className="section-title">A more premium visual system for the Tecfaro story</h2>
              <p className="section-copy">
                The updated direction uses layered gradients, stronger editorial
                type, softer surfaces, and clearer grouping so the page feels
                current without losing clarity or accessibility.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <p className="feature-card__accent">{feature.accent}</p>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__copy">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="use-cases-section px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="section-intro section-intro--light">
              <p className="section-label section-label--dark">Use Cases</p>
              <h2 className="section-title section-title--light">
                Built for teams that want signal clarity before execution.
              </h2>
              <p className="section-copy text-slate-300">
                Every section now feels more intentional, from the headline rhythm
                to the card shapes and color contrast. The result is a brand
                presence that feels more modern and product-led.
              </p>
            </div>

            <div className="use-case-grid" aria-label="Tecfaro use cases">
              {useCases.map((item) => (
                <article key={item.title} className="use-case-card">
                  <p className="use-case-card__title">{item.title}</p>
                  <p className="use-case-card__copy">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="cta-panel mx-auto max-w-5xl">
            <div>
              <p className="section-label">Get Started</p>
              <h2 className="section-title">Bring sharper derivatives insight into every trading decision</h2>
              <p className="section-copy max-w-2xl">
                Tecfaro helps teams move faster with clearer market context,
                focused analytics, and a more confident view of flow, open
                interest, and risk.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="cta-button cta-button--primary"
                href="mailto:support@tecfaro.com?subject=Book%20a%20Call"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-shell px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="brand-mark brand-mark--footer">
              <span className="brand-mark__dot" aria-hidden="true" />
              Tecfaro
            </p>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Accessible derivatives intelligence with a more modern front door
              for traders and analytics teams.
            </p>
          </div>

          <div className="text-sm">
            <p>
              <a className="footer-link" href="mailto:support@tecfaro.com">
                support@tecfaro.com
              </a>
            </p>
            <p className="mt-1 text-slate-500">
              Copyright 2026 Tecfaro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
