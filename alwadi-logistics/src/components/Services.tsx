import { Boxes, Handshake, Layers, Radar, Snowflake, Truck, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/content";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  truck: Truck,
  boxes: Boxes,
  snowflake: Snowflake,
  layers: Layers,
  handshake: Handshake,
  radar: Radar,
};

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Freight solutions built around your shipment"
          intro="Whatever you're moving, we find the right equipment and the right carrier — then manage the details so you don't have to."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <article
                key={s.title}
                className="group rounded-xl border border-mist bg-white p-7 transition hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand/8 text-brand transition group-hover:bg-teal group-hover:text-white">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-brand">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
