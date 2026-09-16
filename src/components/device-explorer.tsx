"use client";

import { useState } from "react";
import { GanttChart, LayoutGrid } from "lucide-react";
import { DeviceCard } from "@/components/device-card";
import { DeviceTimeline } from "@/components/device-timeline";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { devices, type Category } from "@/data/devices";

type Filter = "all" | Category;
type View = "grid" | "timeline";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "phones", label: "Phones" },
  { value: "tablets", label: "Tablets" },
  { value: "laptops", label: "Laptops" },
];

export function DeviceExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<View>("grid");

  const visible = filter === "all" ? devices : devices.filter((d) => d.category === filter);
  const count = (f: Filter) =>
    f === "all" ? devices.length : devices.filter((d) => d.category === f).length;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="sticky top-14 z-30 -mx-4 mb-8 flex items-center justify-between gap-3 bg-background/70 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="min-w-0">
          <div className="-my-1 overflow-x-auto py-1 [scrollbar-width:none]">
            <TabsList className="h-9!">
              {filters.map((f) => (
                <TabsTrigger key={f.value} value={f.value} className="px-2 sm:px-3">
                  {f.label}
                  <span className="hidden font-mono text-[0.7rem] text-muted-foreground tabular-nums sm:inline">
                    {count(f.value)}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <ToggleGroup
          variant="outline"
          spacing={0}
          value={[view]}
          onValueChange={(v) => v[0] && setView(v[0] as View)}
          aria-label="View"
          className="shrink-0"
        >
          <ToggleGroupItem value="grid" aria-label="Grid view" className="h-9 px-2.5">
            <LayoutGrid />
            <span className="hidden md:inline">Grid</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="timeline" aria-label="Timeline view" className="h-9 px-2.5">
            <GanttChart />
            <span className="hidden md:inline">Timeline</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div key={`${view}-${filter}`} className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((d) => (
              <DeviceCard key={d.key} device={d} />
            ))}
          </div>
        ) : (
          <DeviceTimeline devices={visible} />
        )}
      </div>
    </section>
  );
}
