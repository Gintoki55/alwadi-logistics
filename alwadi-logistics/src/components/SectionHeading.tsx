export default function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-teal" : "text-teal-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-brand"}`}>{title}</h2>
      <div className={`road-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {intro && (
        <p className={`mt-5 text-[16px] leading-relaxed ${light ? "text-white/75" : "text-slate-brand"}`}>{intro}</p>
      )}
    </div>
  );
}
