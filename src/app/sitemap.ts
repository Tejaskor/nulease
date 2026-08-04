import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";

/**
 * Static route list for the marketing site. Add new top-level routes here as
 * pages are built out from the Figma design.
 */
const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [{ path: "/", priority: 1, changeFrequency: "weekly" }];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
