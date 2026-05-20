export function AnnouncementBar() {
  return (
    <div className="bg-espresso text-[#EDE6DA] text-[12.5px]">
      <div className="max-w-[1320px] mx-auto px-5 py-2.5 flex items-center justify-center gap-3 text-center">
        <span className="inline-flex w-1.5 h-1.5 rounded-full bg-accent dot-pulse" />
        <span className="tracking-wide">
          Now booking · Mon–Sun · Kukatpally, Hyderabad ·{' '}
          <a href="tel:+91XXXXXXXXXX" className="underline underline-offset-2 hover:text-white">
            +91 XXXXX XXXXX
          </a>
        </span>
      </div>
    </div>
  );
}
