import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand">
      {/* photo sits on the right; navy gradient carries the copy on the left */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[68%]">
        <Image src="/images/hero.jpg" alt="Al-Wadi branded truck on a coastal highway" fill priority className="object-cover object-center" sizes="(min-width: 768px) 68vw, 100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/10 md:via-brand/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent md:hidden" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-medium tracking-wide text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          Freight brokerage across the United States
        </p>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Your Cargo.
          <br />
          Our Connection.
        </h1>
        <p className="mt-5 text-lg font-medium text-white/90">Efficient. Reliable. Global.</p>
        <div className="road-rule mt-5" />
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
          We connect shippers with independent, authorized motor carriers — negotiating rates, matching loads and
          coordinating every mile in between.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 font-semibold text-white hover:bg-teal-600"
          >
            Request a Quote <ArrowRight size={18} />
          </a>
          <a
            href="#partners"
            className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Partner as a Carrier
          </a>
        </div>
      </div>
    </section>
  );
}
