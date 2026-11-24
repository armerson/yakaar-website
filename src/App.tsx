import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FootballClub from './pages/FootballClub'
import SponsorPlayer from './pages/SponsorPlayer'
import HopeFootballCentre from './pages/HopeFootballCentre'
import CoachesTraining from './pages/CoachesTraining'
import GetInvolved from './pages/GetInvolved'
import Give from './pages/Give'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <section className="premium-page premium-container flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="premium-eyebrow">Page not found</p>
      <h1 className="premium-heading mt-4">We couldn't find that page.</h1>
      <p className="premium-copy mt-6">The address may have changed. You can return to the homepage or explore our programmes.</p>
      <Link className="premium-button mt-8" to="/">Go to homepage</Link>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/football-club" element={<FootballClub />} />
          <Route path="/sponsor" element={<SponsorPlayer />} />
          <Route path="/hope-football-centre" element={<HopeFootballCentre />} />
          <Route path="/coaches-training" element={<CoachesTraining />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium-preview" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
