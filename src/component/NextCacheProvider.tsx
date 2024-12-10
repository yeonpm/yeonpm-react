"use client";
import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const cache = createCache({
  key: "css",
  prepend: true,
});
export default function Providers({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
