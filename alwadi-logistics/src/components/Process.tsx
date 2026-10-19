import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-brand py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-10 h-[420px] w-[520px] bg-[url('/images/logo-mark-white.png')] bg-contain bg-no-repeat opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="How it works"
          title="From quote to delivery in four steps"
          intro="A simple, transparent process — with one team keeping your shipment on track the whole way."
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-teal font-display font-bold text-white">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 border-t-2 border-dashed border-white/25 lg:block" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
