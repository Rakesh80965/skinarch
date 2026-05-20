interface Props {
  open: boolean;
  onClose: () => void;
}

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#results', label: 'Results' },
  { href: '#faq', label: 'FAQ' },
  { href: '#visit', label: 'Visit' },
];

export function MobileNav({ open, onClose }: Props) {
  return (
    <aside className={`mnav ${open ? 'open' : ''} fixed inset-0 z-50 bg-bg pt-6 px-6 overflow-y-auto`}>
      <div className="flex items-center justify-between mb-10">
        <span className="font-serif italic text-2xl">skin arch.</span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-line grid place-items-center"
          aria-label="Close menu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="font-serif text-4xl space-y-5 mb-10">
        {LINKS.map((l) => (
          <a key={l.href} className="block" href={l.href} onClick={onClose}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="pt-6 border-t border-line space-y-3 text-sm text-inksoft">
        <div>Mon–Sun · 10:00 AM – 2:00 PM, 5:30 PM – 9:30 PM</div>
        <div>
          <a href="tel:+91XXXXXXXXXX" className="text-ink">
            +91 XXXXX XXXXX
          </a>
        </div>
        <a href="#book" className="btn btn-primary mt-4" onClick={onClose}>
          Book Consultation
        </a>
      </div>
    </aside>
  );
}
