export function FloatingCta() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/917288911000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_14px_28px_-12px_rgba(37,211,102,.7)] pulse"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A10 10 0 0 0 4 17l-1.5 5 5.1-1.4A10 10 0 1 0 20.5 3.5zm-8.4 15.4a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 6.7 3.7zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.1-.5 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2c0 1.3 1 2.5 1.1 2.7s1.9 3 4.7 4.2a16 16 0 0 0 1.6.6 4 4 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
        </svg>
      </a>
      <a
        href="tel:+917288911000"
        aria-label="Call clinic"
        className="w-14 h-14 rounded-full bg-ink text-bg grid place-items-center shadow-[0_14px_28px_-12px_rgba(31,27,22,.6)]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
