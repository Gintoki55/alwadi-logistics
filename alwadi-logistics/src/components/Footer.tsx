import Logo from "./Logo";
import { company, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Connecting markets. Moving opportunities. A freight brokerage arranging transportation through
            independent, authorized motor carriers across the United States.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-bold">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold">Get in touch</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
            <li>{company.phone}</li>
            <li>{company.mcNumber}</li>
            <li>{company.dotNumber}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/45 sm:px-6 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>
            {company.short} is a freight broker and does not own or operate trucks. Transportation is performed by
            independent, authorized motor carriers.
          </p>
        </div>
      </div>
    </footer>
  );
}
