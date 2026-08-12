import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import DiscoveryFeed from './pages/DiscoveryFeed'
import EventDetail from './pages/EventDetail'
import Login from './pages/Login'
import EventStudio from './pages/EventStudio'
import CreateEvent from './pages/CreateEvent'
import GateScanner from './pages/GateScanner'

export default function App() {
  return <div className="min-h-screen bg-spot-cream text-spot-ink">
    <Navbar />
    <main><Routes>
      <Route path="/" element={<Navigate to="/events/" replace />} />
      <Route path="/events/" element={<DiscoveryFeed />} />
      <Route path="/events/:slug/" element={<EventDetail />} />
      <Route path="/auth/" element={<Login />} />
      <Route element={<ProtectedRoute roles={['organizer', 'admin']} />}>
        <Route path="/studio/" element={<EventStudio />} />
        <Route path="/studio/create/" element={<CreateEvent />} />
      </Route>
      <Route element={<ProtectedRoute roles={['staff', 'organizer', 'admin']} />}>
        <Route path="/verify/" element={<GateScanner />} />
      </Route>
      <Route path="*" element={<Navigate to="/events/" replace />} />
    </Routes></main>
    <Footer />
  </div>
}
