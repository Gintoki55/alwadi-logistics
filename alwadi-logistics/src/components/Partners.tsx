import { ArrowRight, CheckCircle2, Package, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { carrierPoints, shipperPoints } from "@/lib/content";

function Card({
  icon: Icon,
  label,
  title,
  points,
  cta,
  subject,
  dark,
}: {
  icon: typeof Package;
  label: string;
  title: string;
  points: string[];
  cta: string;
  subject: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex flex-col rounded-2xl p-8 sm:p-10 ${dark ? "bg-ink text-white" : "border border-mist bg-white"}`}>
      <div className="flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-lg ${dark ? "bg-white/10 text-teal" : "bg-brand text-white"}`}>
          <Icon size={22} />
        </span>
        <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-teal" : "text-teal-600"}`}>
          {label}
        </span>
      </div>
      <h3 className={`mt-6 text-2xl font-bold ${dark ? "text-white" : "text-brand"}`}>{title}</h3>
      <ul className="mt-6 flex-1 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-[15px]">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal" />
            <span className={dark ? "text-white/80" : "text-slate-brand"}>{p}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        data-inquiry={subject}
        className={`mt-8 inline-flex items-center gap-2 self-start rounded-md px-5 py-3 font-semibold ${
          dark ? "bg-teal text-white hover:bg-teal-600" : "bg-brand text-white hover:bg-brand-600"
        }`}
      >
        {cta} <ArrowRight size={18} />
      </a>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          center
          eyebrow="Who we serve"
          title="Built for both sides of the load"
          intro="Good freight moves when shippers and carriers both win. That's the relationship we broker."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Card
            icon={Package}
            label="For shippers"
            title="Move your freight with confidence"
            points={shipperPoints}
            cta="Request a Quote"
            subject="shipper"
          />
          <Card
            dark
            icon={Truck}
            label="For carriers"
            title="Keep your trucks loaded"
            points={carrierPoints}
            cta="Join Our Carrier Network"
            subject="carrier"
          />
        </div>
      </div>
    </section>
  );
}
