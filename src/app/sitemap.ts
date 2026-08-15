import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tools/festival-packing-list",
    "/tools/festival-budget",
    "/tools/heat-check",
    "/tools/rain-check",
    "/items",
    "/privacy",
    "/disclaimer",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/tools") || route === "/items" ? 0.8 : 0.3,
  }));
}
