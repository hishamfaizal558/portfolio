function ContactSection({ contactMethods, onNavigate, onSubmit }) {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Contact
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Open to fresher opportunities
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
            I am looking for entry-level roles, internships, and learning
            opportunities in cybersecurity, networking, and web development.
            Feel free to contact me for openings, guidance, or collaboration.
          </p>

          <div className="mt-8 grid gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                onClick={
                  method.href.startsWith('#')
                    ? (event) => {
                        event.preventDefault()
                        onNavigate(method.href.slice(1))
                      }
                    : undefined
                }
                className="group flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-yellow-400"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 font-bold text-zinc-950">
                  {method.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 group-hover:text-yellow-400">
                    {method.label}
                  </span>
                  <span className="mt-1 block text-zinc-100">
                    {method.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Availability
            </p>
            <p className="mt-3 leading-7 text-zinc-200">
              Open to cybersecurity learning opportunities, beginner-friendly
              security projects, web development work, and technical
              collaborations.
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-white shadow-2xl shadow-black/40 md:p-8"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Message
            </p>
            <h3 className="mt-2 text-3xl font-bold">Start a conversation</h3>
          </div>

          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input
                name="name"
                type="text"
                className="rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input
                name="email"
                type="email"
                className="rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
                placeholder="your@email.com"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Topic
              <select
                name="topic"
                className="rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-400"
              >
                <option>Internship opportunity</option>
                <option>Entry-level role</option>
                <option>Cybersecurity guidance</option>
                <option>Project collaboration</option>
                <option>Web development opportunity</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Message
              <textarea
                name="message"
                rows="5"
                className="resize-none rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
                placeholder="Tell me what you want to build, test, or discuss."
                required
              />
            </label>

            <button
              type="submit"
              className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
            >
              Send Message
            </button>

            <p className="text-sm leading-6 text-zinc-400">
              Prefer email? Use hishamfaizal558@gmail.com and include the
              project goal, timeline, and any security requirements.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
