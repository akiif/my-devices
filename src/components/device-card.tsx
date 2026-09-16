import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, formatDate, type CategorizedDevice } from "@/data/devices";
import { basePath } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function specChips(device: CategorizedDevice): string[] {
  const s = device.specs;
  const storage = (s?.storage ?? []).map((d) => (/^\d+(MB|GB|TB)$/.test(d) ? `${d} storage` : d));
  return [s?.processor, s?.gpu, s?.ram && `${s.ram} RAM`, ...storage].filter(
    (x): x is string => Boolean(x),
  );
}

export function DeviceImage({ device, className }: { device: CategorizedDevice; className?: string }) {
  return (
    // Product shots have white backgrounds, so they sit on a white panel in both themes.
    <div className={cn("flex items-center justify-center overflow-hidden bg-white", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized anyway */}
      <img
        src={`${basePath}${device.img}`}
        alt={device.name}
        loading="lazy"
        className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export function DeviceCard({ device }: { device: CategorizedDevice }) {
  const released = formatDate(device.released_date);
  const acquired = formatDate(device.purchased_date);
  const chips = specChips(device);
  const summary = [device.specs?.display, device.specs?.camera && `${device.specs.camera} camera`]
    .filter(Boolean)
    .join(" · ");

  return (
    <a
      href={device.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <DeviceImage device={device} className="aspect-[4/3] p-6" />

      <div className="flex flex-1 flex-col gap-4 border-t border-border p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{categoryLabels[device.category]}</Badge>
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {device.acquired_year}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="leading-snug font-semibold tracking-tight">{device.name}</h3>
            {summary && <p className="mt-1 text-xs text-muted-foreground">{summary}</p>}
          </div>
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
        </div>

        {chips.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-md border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-auto grid grid-cols-2 gap-3 border-t border-dashed border-border pt-3 text-xs">
          <div>
            <dt className="text-muted-foreground">Released</dt>
            <dd className="mt-0.5 font-medium">{released ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Acquired</dt>
            <dd className="mt-0.5 font-medium">{acquired ?? device.acquired_year}</dd>
          </div>
        </dl>
      </div>
    </a>
  );
}
