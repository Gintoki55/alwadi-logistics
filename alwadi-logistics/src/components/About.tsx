import Image from "next/image";
import { Building2, Route, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { values } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who we are" title="The connection between your freight and the right carrier" />
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-slate-brand">
            <p>
              <strong className="text-ink">AL-WADI LOGISTICS LLC</strong> is a freight brokerage and logistics services
              company that connects businesses and shippers with independent, authorized motor carriers to arrange the
              transportation of goods across the United States.
            </p>
            <p>
              We act as the intermediary between shippers and carriers — coordinating shipments, negotiating
              transportation rates, matching available loads with suitable carriers, and keeping communication clear
              throughout the shipping process.
            </p>
          </div>

          <div className="mt-8 flex gap-4 rounded-lg border border-mist bg-paper p-5">
            <Building2 className="mt-0.5 shrink-0 text-teal-600" size={22} />
            <p className="text-sm leading-relaxed text-slate-brand">
              <span className="font-semibold text-ink">An asset-light model.</span> We don&apos;t own or operate a
              fleet of trucks. Instead, we work with a network of independent carriers and transportation companies —
              which gives you flexible capacity and lets us choose the best fit for every load.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl">
            <Image src="/images/building.jpg" alt="Al-Wadi Logistics office" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-mist shadow-lg sm:left-8 sm:right-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-4">
                <p className="font-display text-sm font-bold text-brand">{v.title}</p>
                <p className="mt-1 hidden text-xs leading-snug text-slate-brand sm:block">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
        <div className="flex items-start gap-4 rounded-lg bg-brand p-6 text-white">
          <Route className="shrink-0 text-teal" size={26} />
          <div>
            <p className="font-display font-bold">Coast-to-coast coverage</p>
            <p className="mt-1 text-sm text-white/75">Local, regional and long-haul lanes across the 48 contiguous states.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-lg bg-ink p-6 text-white">
          <ShieldCheck className="shrink-0 text-teal" size={26} />
          <div>
            <p className="font-display font-bold">Vetted carrier partners</p>
            <p className="mt-1 text-sm text-white/75">We verify operating authority, insurance and safety records before tendering a load.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
