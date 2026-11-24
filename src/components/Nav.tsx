import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/football-club', label: 'Football Club' },
  { to: '/coaches-training', label: 'Coaches Training' },
  { to: '/hope-football-centre', label: 'Hope Football Centre' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ea]/92 shadow-sm backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Yakaar Football" className="h-10 w-10 rounded-full object-cover ring-1 ring-black/10" />
            <span className="font-bold text-lg text-[#171717] hidden sm:block">Yakaar Football</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? 'text-[#a34a28]'
                      : 'text-[#4a4338] hover:text-[#a34a28]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/give?purpose=player"
              className="hidden min-h-10 items-center bg-black px-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#a34a28] sm:inline-flex"
            >
              Sponsor a Player
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[#171717] hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a34a28]"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
        <div id="mobile-navigation" hidden={!open} className="lg:hidden border-t border-black/10 bg-[#f7f3ea] px-4 py-3 space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-bold uppercase tracking-[0.12em] ${
                  isActive ? 'text-[#a34a28]' : 'text-[#4a4338] hover:bg-black/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/give?purpose=player"
            onClick={() => setOpen(false)}
            className="mt-2 block bg-black px-3 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white"
          >
            Sponsor a Player
          </Link>
        </div>
    </header>
  )
}
