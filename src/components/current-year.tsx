"use client";

import { useSyncExternalStore } from "react";

// Inlined at build time via next.config.ts, so server and client agree during hydration.
const BUILD_YEAR = Number(process.env.BUILD_YEAR);
const subscribe = () => () => {};

// The site is a static export, so the live year must come from the visitor's clock.
function useCurrentYear() {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );
}

export function CurrentYear() {
  return <>{useCurrentYear()}</>;
}

export function YearsSince({ from }: { from: number }) {
  return <>{useCurrentYear() - from + 1}</>;
}
