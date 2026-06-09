import { useState } from 'react'

function ProjectsSection({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleCount = Math.min(3, projects.length)
  const visibleProjects = Array.from({ length: visibleCount }, (_, index) => {
    return projects[(activeIndex + index) % projects.length]
  })

  const moveProjects = (direction) => {
    setActiveIndex((currentIndex) => {
      return (currentIndex + direction + projects.length) % projects.length
    })
  }

  return (
    <section
      id="projects"
      className="bg-[radial-gradient(circle_at_88%_14%,rgba(250,204,21,0.14),transparent_30%),radial-gradient(circle_at_10%_88%,rgba(250,204,21,0.13),transparent_32%),linear-gradient(145deg,#111827_0%,#101010_45%,#1c1917_100%)] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Projects
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Projects I have built
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            These projects show my interest in building useful tools, practicing
            security concepts, and improving the way technical problems are
            documented and solved.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-zinc-400">
            Showing {visibleCount} of {projects.length} projects
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => moveProjects(-1)}
              aria-label="Show previous projects"
              className="grid h-11 w-11 place-items-center rounded-full border border-zinc-700 bg-zinc-900/80 text-2xl font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => moveProjects(1)}
              aria-label="Show next projects"
              className="grid h-11 w-11 place-items-center rounded-full border border-zinc-700 bg-zinc-900/80 text-2xl font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className={`flex min-h-full flex-col rounded-2xl border bg-zinc-900/75 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-black/40 ${
                index === 1
                  ? 'border-yellow-400/70 shadow-2xl shadow-yellow-400/10 lg:scale-105'
                  : 'border-zinc-800'
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                {project.category}
              </p>
              <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-zinc-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-zinc-950"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Start slider at ${project.title}`}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex
                  ? 'w-8 bg-yellow-400'
                  : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
