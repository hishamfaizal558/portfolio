function SkillIcon({ icon }) {
  const commonProps = {
    'aria-hidden': 'true',
    viewBox: '0 0 24 24',
    className: 'h-6 w-6',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.3',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (icon === 'network') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4" />
        <path d="m6.7 17.5 4.2-4.2" />
        <path d="m17.3 17.5-4.2-4.2" />
      </svg>
    )
  }

  if (icon === 'search') {
    return (
      <svg {...commonProps}>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
        <path d="M9 11h4" />
      </svg>
    )
  }

  if (icon === 'shield') {
    return (
      <svg {...commonProps}>
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    )
  }

  if (icon === 'terminal') {
    return (
      <svg {...commonProps}>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m7 10 3 2-3 2" />
        <path d="M13 15h4" />
      </svg>
    )
  }

  if (icon === 'firewall') {
    return (
      <svg {...commonProps}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
      </svg>
    )
  }

  if (icon === 'web') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 3 15 0 18" />
        <path d="M12 3c-3 3-3 15 0 18" />
      </svg>
    )
  }

  if (icon === 'key') {
    return (
      <svg {...commonProps}>
        <circle cx="8" cy="15" r="4" />
        <path d="m11 12 8-8" />
        <path d="m15 8 2 2" />
        <path d="m17 6 2 2" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M7 3h7l3 3v15H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5" />
      <path d="M10 16h5" />
    </svg>
  )
}

function AboutSection({ cyberSkills }) {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            About
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Growing into cybersecurity
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            I am Hisham Faizal, a fresher focused on cybersecurity, networking,
            and secure web development. I enjoy learning how systems work,
            finding weak points, and improving security through practical
            projects and hands-on labs.
          </p>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            My current interests include ethical hacking, threat hunting,
            firewall configuration, Linux, web security, and cryptography. I am
            building real projects to strengthen my skills and prepare for
            entry-level cybersecurity opportunities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {cyberSkills.map((skill) => (
            <div
              key={skill.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-xl"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-zinc-950 shadow-lg shadow-yellow-400/20">
                <SkillIcon icon={skill.icon} />
              </div>
              <h3 className="text-lg font-semibold">{skill.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
