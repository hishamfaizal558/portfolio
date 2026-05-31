function ProjectsSection({ projects }) {
  return (
    <section
      id="projects"
      className="bg-zinc-950 px-6 py-24 text-white md:px-12 lg:px-20"
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl transition hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-black/40"
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
      </div>
    </section>
  )
}

export default ProjectsSection
