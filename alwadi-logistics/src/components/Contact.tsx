"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Clock, Mail, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { company } from "@/lib/content";

type Inquiry = "shipper" | "carrier" | "other";

const field =
  "w-full rounded-md border border-mist bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-slate-brand/60 focus:border-teal focus:ring-2 focus:ring-teal/25";

export default function Contact() {
  const [type, setType] = useState<Inquiry>("shipper");
  const [sent, setSent] = useState(false);

  // "Request a Quote" / "Join Our Carrier Network" buttons preselect the inquiry type
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-inquiry]");
      if (el?.dataset.inquiry) setType(el.dataset.inquiry as Inquiry);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // No backend yet: the form opens the visitor's email app with everything filled in.
  // To receive submissions directly, swap this for a POST to an API route / Formspree / Resend.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const label = type === "shipper" ? "Quote request" : type === "carrier" ? "Carrier partnership" : "General inquiry";
    const lines = [
      `Inquiry: ${label}`,
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company") || "-"}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "-"}`,
      type === "shipper" ? `Lane: ${d.get("origin") || "?"} → ${d.get("destination") || "?"}` : "",
      type === "shipper" ? `Equipment: ${d.get("equipment")}` : "",
      type === "carrier" ? `MC / DOT: ${d.get("mc") || "-"}` : "",
      "",
      String(d.get("message") || ""),
    ].filter((l) => l !== "");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`${label} – ${d.get("name")}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  const tabs: { id: Inquiry; label: string }[] = [
    { id: "shipper", label: "I'm a Shipper" },
    { id: "carrier", label: "I'm a Carrier" },
    { id: "other", label: "Other" },
  ];

  return (
    <section id="contact" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <SectionHeading
            eyebrow="Contact us"
            title="Let's move your next load"
            intro="Tell us what you're shipping — or what lanes you run — and our team will get back to you quickly."
          />
          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white"><Mail size={20} /></span>
              <a href={`mailto:${company.email}`} className="font-medium text-ink hover:text-brand">{company.email}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white"><Phone size={20} /></span>
              <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="font-medium text-ink hover:text-brand">{company.phone}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand text-white"><Clock size={20} /></span>
              <span className="text-[15px] text-slate-brand">{company.hours}</span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-mist bg-white p-6 shadow-sm sm:p-8">
          <div role="tablist" className="mb-6 grid grid-cols-3 gap-1 rounded-lg bg-paper p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={type === t.id}
                onClick={() => setType(t.id)}
                className={`rounded-md px-2 py-2 text-sm font-semibold transition ${
                  type === t.id ? "bg-brand text-white shadow-sm" : "text-slate-brand hover:text-brand"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">Full name *
              <input name="name" required className={`${field} mt-1.5`} placeholder="John Smith" />
            </label>
            <label className="block text-sm font-medium text-ink">Company
              <input name="company" className={`${field} mt-1.5`} placeholder="Company name" />
            </label>
            <label className="block text-sm font-medium text-ink">Email *
              <input name="email" type="email" required className={`${field} mt-1.5`} placeholder="you@company.com" />
            </label>
            <label className="block text-sm font-medium text-ink">Phone
              <input name="phone" type="tel" className={`${field} mt-1.5`} placeholder="(555) 123-4567" />
            </label>

            {type === "shipper" && (
              <>
                <label className="block text-sm font-medium text-ink">Origin (city, state)
                  <input name="origin" className={`${field} mt-1.5`} placeholder="Dallas, TX" />
                </label>
                <label className="block text-sm font-medium text-ink">Destination (city, state)
                  <input name="destination" className={`${field} mt-1.5`} placeholder="Atlanta, GA" />
                </label>
                <label className="block text-sm font-medium text-ink sm:col-span-2">Equipment
                  <select name="equipment" className={`${field} mt-1.5`} defaultValue="Dry Van">
                    <option>Dry Van</option>
                    <option>Reefer</option>
                    <option>Flatbed</option>
                    <option>Step Deck</option>
                    <option>LTL</option>
                    <option>Not sure</option>
                  </select>
                </label>
              </>
            )}

            {type === "carrier" && (
              <label className="block text-sm font-medium text-ink sm:col-span-2">MC / USDOT number
                <input name="mc" className={`${field} mt-1.5`} placeholder="MC 123456 / DOT 1234567" />
              </label>
            )}

            <label className="block text-sm font-medium text-ink sm:col-span-2">
              {type === "carrier" ? "Equipment & preferred lanes" : "Details"}
              <textarea
                name="message"
                rows={4}
                className={`${field} mt-1.5 resize-y`}
                placeholder={
                  type === "carrier"
                    ? "e.g. 3 dry vans, running TX ↔ Southeast"
                    : "Commodity, weight, pickup date, special requirements…"
                }
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-5 py-3.5 font-semibold text-white hover:bg-teal-600 sm:w-auto"
          >
            <Send size={18} /> {type === "carrier" ? "Send Carrier Info" : type === "shipper" ? "Request a Quote" : "Send Message"}
          </button>
          {sent && (
            <p className="mt-4 text-sm text-slate-brand" role="status">
              Your email app should open with your message ready to send. If it didn&apos;t, email us at{" "}
              <a className="font-medium text-brand underline" href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
