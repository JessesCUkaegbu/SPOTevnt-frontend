import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export type Event = {
  id: number | string; slug: string; title: string; date: string; time?: string; location: string;
  city?: string; category: string; price: string; image: string; accent?: string; description?: string; organizer?: string; attendees?: string
}

export default function EventCard({ event, featured = false }: { event: Event; featured?: boolean }) {
  return <Link to={`/events/${event.slug}/`} className={`group block overflow-hidden rounded-[22px] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? 'md:col-span-2' : ''}`}>
    <div className={`relative overflow-hidden ${featured ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}>
      <img src={event.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-spot-ink/60 via-transparent to-transparent" />
      <span className="absolute left-4 top-4 rounded-full bg-spot-cream/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]">{event.category}</span>
      {featured && <span className="absolute bottom-4 left-4 rounded-full bg-spot-lime px-3 py-1.5 text-xs font-bold">Featured this week</span>}
      <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-spot-ink opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={18} /></span>
    </div>
    <div className="p-5"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-xl font-bold leading-tight tracking-[-0.04em]">{event.title}</h3><span className="shrink-0 text-sm font-bold">{event.price}</span></div><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-spot-ink/55"><span className="inline-flex items-center gap-1.5"><CalendarDays size={14} className="text-spot-coral" />{event.date}{event.time ? ` · ${event.time}` : ''}</span><span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-spot-blue" />{event.location}</span></div></div>
  </Link>
}
