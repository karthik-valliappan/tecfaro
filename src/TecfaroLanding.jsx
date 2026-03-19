const features = [
  {
    title: 'Advanced OI Analytics',
    description:
      'Track options open interest, skew, and liquidity shifts in seconds.',
  },
  {
    title: 'Visual Market Dashboard',
    description:
      'See sentiment indicators, volatility surfaces, and momentum in one focused workspace.',
  },
  {
    title: 'Smart Alerts',
    description:
      'Get notified when positioning changes, flow spikes, or unusual activity appears.',
  },
  {
    title: 'Intelligent Insights',
    description:
      'Add AI-supported context around derivatives moves and macro-driven market pressure.',
  },
  {
    title: 'Real-time Processing',
    description:
      'Process low-latency derivatives streams designed for active trading teams.',
  },
  {
    title: 'Scalable Infrastructure',
    description:
      'Run analytics on cloud architecture built for growth, reliability, and cost control.',
  },
]

const useCases = [
  'Pinpoint trend-shift risk using open interest and volume data.',
  'Validate breakout setups with position-flow context before execution.',
  'Monitor unusual options concentration and delta changes across strikes.',
  'Calibrate risk management workflows with real-time derivatives signals.',
]

const stats = [
  { value: '24/7', label: 'market monitoring support' },
  { value: '<1s', label: 'alert delivery target' },
  { value: '1 view', label: 'for flow, OI, and price action' },
]

export default function TecfaroLanding() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            className="text-xl font-semibold tracking-tight text-slate-950"
            href="#top"
            aria-label="Tecfaro home"
          >
            Tecfaro
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm text-slate-700 md:flex"
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
            className="cta-button cta-button--primary"
            href="mailto:support@tecfaro.com?subject=Tecfaro%20Sign%20In%20Request"
          >
            Contact Sales
          </a>
        </div>
      </header>

      <main id="main-content">
        <section
          id="top"
          className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
        >
          <div className="hero-glow hero-glow-left" aria-hidden="true" />
          <div className="hero-glow hero-glow-right" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
            <div>
              <p className="eyebrow">
                Real-time derivatives intelligence for active trading teams
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Market signals that connect open interest, volume, and price
                action in one accessible dashboard.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Tecfaro helps traders and analysts interpret derivatives markets
                faster with clearer workflows, timely alerts, and decision-ready
                context.
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
            </div>

            <aside
              className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur"
              aria-labelledby="platform-highlights-title"
            >
              <h2
                id="platform-highlights-title"
                className="text-lg font-semibold text-white"
              >
                Platform highlights
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-slate-200">
                <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  Decision support without clutter, so core market information is
                  easier to scan.
                </li>
                <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  Keyboard-visible focus states and semantic structure for better
                  accessibility.
                </li>
                <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  Static Vite output ready for Cloudflare Pages deployment.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section
          aria-label="Key platform metrics"
          className="border-y border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-2xl font-semibold text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="section-label">Features</p>
              <h2 className="section-title">A cleaner workflow for derivatives analysis</h2>
              <p className="section-copy">
                The landing page now uses clearer structure, stronger contrast,
                and link-based calls to action so visitors can navigate it more
                confidently across keyboard, touch, and screen reader use.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="use-cases"
          className="bg-[#102033] px-4 py-16 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="section-label section-label--dark">Use Cases</p>
              <h2 className="section-title text-white">
                Designed for desks that need context before they act
              </h2>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Tecfaro use cases">
              {useCases.map((item) => (
                <li
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center shadow-sm sm:p-10">
            <h2 className="section-title">Ready to trade with more confidence?</h2>
            <p className="section-copy mx-auto mt-3 max-w-2xl">
              Start a conversation with Tecfaro and deploy this site as a static
              Cloudflare Pages project with the Vite build output in `dist`.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                className="cta-button cta-button--primary"
                href="mailto:support@tecfaro.com?subject=Book%20a%20Call"
              >
                Book a call
              </a>
              <a className="cta-button cta-button--secondary-dark" href="#contact">
                View contact details
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-slate-950 px-4 py-10 text-slate-300 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Tecfaro</p>
            <p className="mt-2 text-sm text-slate-400">
              Accessible derivatives intelligence for traders and analytics teams.
            </p>
          </div>

          <div className="text-sm">
            <p>
              <a className="footer-link" href="mailto:support@tecfaro.com">
                support@tecfaro.com
              </a>
            </p>
            <p className="mt-1 text-slate-400">Copyright 2026 Tecfaro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
