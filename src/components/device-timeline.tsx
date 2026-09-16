import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DeviceImage, specChips } from "@/components/device-card";
import { categoryLabels, formatDate, type CategorizedDevice } from "@/data/devices";

export function DeviceTimeline({ devices }: { devices: CategorizedDevice[] }) {
  const byYear = new Map<number, CategorizedDevice[]>();
  for (const d of devices) {
    byYear.set(d.acquired_year, [...(byYear.get(d.acquired_year) ?? []), d]);
  }

  return (
    <ol className="relative">
      {[...byYear].map(([year, items]) => (
        <li key={year} className="relative grid gap-4 pb-10 pl-8 last:pb-0 md:grid-cols-[7rem_1fr] md:gap-8 md:pl-0">
          {/* Rail and dot sit in the 2rem gap after the 7rem year column on md+. */}
          <span className="absolute top-3 bottom-0 left-[5px] w-px bg-border md:left-[calc(8rem-0.5px)]" />
          <span className="absolute top-2.5 left-0 size-[11px] rounded-full border-2 border-background bg-brand ring-1 ring-brand/40 md:left-[calc(8rem-5.5px)]" />
          <div className="md:text-right">
            <span className="block font-mono text-2xl font-semibold tracking-tight tabular-nums md:sticky md:top-32">
              {year}
            </span>
          </div>

          <div className="grid gap-3 md:pl-4 lg:grid-cols-2">
            {items.map((d) => (
              <TimelineItem key={d.key} device={d} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

function TimelineItem({ device }: { device: CategorizedDevice }) {
  const acquired = formatDate(device.purchased_date);
  const released = formatDate(device.released_date);
  const chips = specChips(device);

  return (
    <a
      href={device.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-stretch gap-4 overflow-hidden rounded-xl border border-border bg-card p-2 pr-4 transition-all duration-300 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <DeviceImage device={device} className="size-20 shrink-0 rounded-lg p-2 sm:size-24" />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 py-1">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{categoryLabels[device.category]}</Badge>
          {acquired && (
            <span className="truncate font-mono text-xs text-muted-foreground">{acquired}</span>
          )}
        </div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="leading-snug font-semibold tracking-tight">{device.name}</h3>
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
        </div>
        <p className="truncate text-xs text-muted-foreground">
          {[chips[0], released && `Released ${released}`].filter(Boolean).join(" · ") || " "}
        </p>
      </div>
    </a>
  );
}
