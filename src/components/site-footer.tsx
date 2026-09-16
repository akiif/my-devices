import { CurrentYear } from "@/components/current-year";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>
          © <CurrentYear />{" "}
          <a
            href="https://akiif.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Akif Mohammed
          </a>
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; shadcn/ui</p>
      </div>
    </footer>
  );
}
