import { ArrowUpRight, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="bg-spot-ink text-white">
    <div className="container-page grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
      <div><Link to="/events/" className="font-display text-2xl font-bold tracking-[-0.08em]">SPOT<span className="text-spot-coral">evnt</span><span className="text-spot-lime">.</span></Link><p className="mt-4 max-w-[230px] text-sm leading-6 text-white/55">A better way to find your people, places, and next good night.</p><div className="mt-7 flex gap-3"><span className="rounded-full border border-white/10 p-2"><Instagram size={15} /></span><span className="rounded-full border border-white/10 p-2"><Twitter size={15} /></span></div></div>
      <FooterGroup title="Discover" links={['Browse events', 'This weekend', 'Near me']} />
      <FooterGroup title="Build with us" links={['Host an event', 'Organizer studio', 'Ticketing']} />
      <FooterGroup title="Company" links={['About SPOTevnt', 'Contact', 'Privacy']} />
    </div>
    <div className="container-page flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© 2025 SPOTevnt. Made for good nights.</span><span>Built with intention <span className="text-spot-coral">♥</span></span></div>
  </footer>
}

function FooterGroup({ title, links }) {
  return <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/35">{title}</p><div className="flex flex-col gap-3">{links.map((link) => <Link key={link} to="/events/" className="group flex items-center gap-1 text-sm text-white/65 hover:text-white">{link}<ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" /></Link>)}</div></div>
}
