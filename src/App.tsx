import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FootballClub from './pages/FootballClub'
import SponsorPlayer from './pages/SponsorPlayer'
import HopeFootballCentre from './pages/HopeFootballCentre'
import CoachesTraining from './pages/CoachesTraining'
import GetInvolved from './pages/GetInvolved'

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
          <Route path="/premium-preview" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
