import { CurrentYear, YearsSince } from "@/components/current-year";
import { categoryLabels, devices, type Category } from "@/data/devices";

export function Hero() {
  const first = Math.min(...devices.map((d) => d.acquired_year));
  const categories = Object.keys(categoryLabels) as Category[];

  const stats = [
    { label: "Devices", value: devices.length },
    ...categories.map((c) => ({
      label: `${categoryLabels[c]}s`,
      value: devices.filter((d) => d.category === c).length,
    })),
    { label: "Years", value: <YearsSince from={first} /> },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-brand" />
          {first} — <CurrentYear />
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl lg:text-6xl">
          Every piece of tech{" "}
          <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
            I&apos;ve owned.
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
          A personal archive of the phones, tablets, laptops and consoles that have passed through my
          hands over the years.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-background/80 px-5 py-4 backdrop-blur">
              <dt className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {s.label}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
