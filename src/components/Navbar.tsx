import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, Ticket, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Explore', '/events/'], ['For organizers', '/studio/'], ['Verify tickets', '/verify/']]
  return <header className="sticky top-0 z-50 border-b border-spot-ink/10 bg-spot-cream/90 backdrop-blur-xl">
    <div className="container-page flex h-[74px] items-center justify-between gap-6">
      <Link to="/events/" className="font-display text-[25px] font-bold tracking-[-0.08em]">SPOT<span className="text-spot-coral">evnt</span><span className="text-spot-blue">.</span></Link>
      <nav className="hidden items-center gap-7 md:flex">
        {links.map(([label, href]) => <NavLink key={href} to={href} className={({ isActive }) => `text-sm font-semibold transition hover:text-spot-blue ${isActive ? 'text-spot-ink' : 'text-spot-ink/55'}`}>{label}</NavLink>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <Link aria-label="Search events" to="/events/" className="rounded-full p-2.5 transition hover:bg-white"><Search size={19} /></Link>
        <Link to="/auth/" className="btn-dark px-4 py-2.5"><Ticket size={16} />Sign in</Link>
      </div>
      <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-spot-ink/10 bg-spot-cream px-5 py-5 md:hidden"><nav className="container-page flex flex-col gap-4">{links.map(([label, href]) => <NavLink onClick={() => setOpen(false)} key={href} to={href} className="text-base font-semibold">{label}</NavLink>)}<Link to="/auth/" onClick={() => setOpen(false)} className="btn-dark mt-2">Sign in</Link></nav></div>}
  </header>
}
