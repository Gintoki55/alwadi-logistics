import Image from "next/image";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <span className="flex items-center gap-3">
      <Image
        src={light ? "/images/logo-mark-white.png" : "/images/logo-mark.png"}
        alt=""
        width={light ? 210 : 420}
        height={light ? 110 : 230}
        className="h-10 w-auto"
        priority
      />
      <span className="leading-none">
        <span
          className={`block font-display text-[17px] font-extrabold tracking-tight ${light ? "text-white" : "text-brand"}`}
        >
          AL-WADI LOGISTICS
        </span>
        <span className={`mt-1 block text-[10.5px] tracking-wide ${light ? "text-white/70" : "text-brand/80"}`}>
          Freight Brokerage &amp; Logistics Services
        </span>
      </span>
    </span>
  );
}
