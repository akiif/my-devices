import { DeviceExplorer } from "@/components/device-explorer";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top" className="relative flex min-h-dvh flex-col">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
      </div>

      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <DeviceExplorer />
      </main>
      <SiteFooter />
    </div>
  );
}
