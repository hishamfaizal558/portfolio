import { useState } from 'react'

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

  if (icon === 'server') {
    return (
      <svg {...commonProps}>
        <rect width="16" height="6" x="4" y="4" rx="2" />
        <rect width="16" height="6" x="4" y="14" rx="2" />
        <path d="M8 7h.01" />
        <path d="M8 17h.01" />
        <path d="M12 7h4" />
        <path d="M12 17h4" />
      </svg>
    )
  }

  if (icon === 'lock') {
    return (
      <svg {...commonProps}>
        <rect width="14" height="10" x="5" y="11" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <path d="M12 15v2" />
      </svg>
    )
  }

  if (icon === 'users') {
    return (
      <svg {...commonProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.8" />
        <path d="M16 3.4a4 4 0 0 1 0 7.2" />
      </svg>
    )
  }

  if (icon === 'database') {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
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
  const visibleCount = Math.min(3, cyberSkills.length)
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleSkills = Array.from({ length: visibleCount }, (_, index) => {
    return cyberSkills[(activeIndex + index) % cyberSkills.length]
  })

  const moveSkills = (direction) => {
    setActiveIndex((currentIndex) => {
      return (currentIndex + direction + cyberSkills.length) % cyberSkills.length
    })
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-[radial-gradient(circle_at_90%_88%,rgba(250,204,21,0.12),transparent_32%),linear-gradient(135deg,#18181b_0%,#0f0f0f_48%,#1c1917_100%)] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            About
          </p>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Growing into cybersecurity
          </h2>
          <div className="mt-7 grid gap-6 text-lg leading-8 text-zinc-300 lg:grid-cols-2">
            <p>
              I am Hisham Faizal, a fresher focused on cybersecurity,
              networking, and secure web development. I enjoy learning how
              systems work, finding weak points, and improving security through
              practical projects and hands-on labs.
            </p>
            <p>
              My current interests include ethical hacking, threat hunting,
              firewall configuration, Linux server hosting, web security,
              cryptography, and social engineering awareness. I am building real
              projects to strengthen my skills and prepare for entry-level
              cybersecurity opportunities.
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-400">
                Skills
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Practical cybersecurity skill set
              </h3>
              <p className="mt-2 text-base text-zinc-400">
                Showing {visibleCount} of {cyberSkills.length} skills
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => moveSkills(-1)}
                aria-label="Show previous skills"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-2xl text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <button
                type="button"
                onClick={() => moveSkills(1)}
                aria-label="Show next skills"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-2xl text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {visibleSkills.map((skill) => (
              <div
                key={skill.label}
                className="flex min-h-56 flex-col justify-between rounded-2xl border border-zinc-700/70 bg-zinc-900/80 p-7 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/80"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-zinc-950 shadow-lg shadow-yellow-400/20">
                  <SkillIcon icon={skill.icon} />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-snug">
                  {skill.label}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {cyberSkills.map((skill, index) => (
              <button
                key={skill.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Start skill slider at ${skill.label}`}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? 'w-8 bg-yellow-400'
                    : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
