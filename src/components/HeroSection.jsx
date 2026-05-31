import profileImage from '../assets/image_portfolio.jpeg'

function HeroSection({ onNavigate }) {
  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex items-center bg-black px-6 py-14 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
            Cybersecurity Analyst
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Hi, I'm Hisham Faizal
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-300">
            Cybersecurity Engineer with a strong foundation in network security,
            threat hunting, and ethical hacking. Focused on detecting threats,
            enhancing security posture, and solving real-world cybersecurity
            challenges.
          </p>

         

          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="mt-8 inline-flex rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            View Projects
          </button>
        </div>
      </div>

      <div className="relative min-h-[50vh] overflow-hidden bg-black lg:min-h-screen">
        <img
          src={profileImage}
          alt="Hisham profile"
          className="h-full w-full object-cover [mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/30"
        />
      </div>
    </section>
  )
}

export default HeroSection
