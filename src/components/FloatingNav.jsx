import NavIcon from './NavIcon'

function FloatingNav({ navItems, onNavigate }) {
  return (
    <div className="fixed left-1/2 top-5 z-10 -translate-x-1/2 rounded-[2rem] bg-zinc-950/80 px-5 py-3 shadow-2xl backdrop-blur-md">
      <nav className="flex gap-4" aria-label="Portfolio sections">
        {navItems.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => onNavigate(item.target)}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition hover:bg-yellow-400"
            aria-label={item.name}
          >
            <span className="absolute top-14 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">
              {item.name}
            </span>
            <NavIcon icon={item.icon} />
          </button>
        ))}
      </nav>
    </div>
  )
}

export default FloatingNav
