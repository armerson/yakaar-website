import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white/72">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpg" alt="Yakaar Football" className="h-10 w-10 rounded-full ring-1 ring-white/20" />
              <span className="font-bold text-white text-lg">Yakaar Football</span>
            </div>
            <p className="text-sm leading-relaxed">
              Helping young people in Senegal discover and fulfil their God-given purpose through football.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#f4d35e]">Pages</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/football-club', label: 'Football Club' },
                { to: '/coaches-training', label: 'Coaches Training' },
                { to: '/hope-football-centre', label: 'Hope Football Centre' },
                { to: '/sponsor', label: 'Sponsor a Player' },
                { to: '/get-involved', label: 'Get Involved' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#f4d35e]">Get in Touch</h3>
            <p className="text-sm mb-4">
              Want to partner with us, visit, or find out more? We'd love to hear from you.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex min-h-11 items-center bg-[#f4d35e] px-5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} Yakaar Football · Senegal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
