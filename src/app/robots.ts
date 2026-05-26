import type { MetadataRoute } from "next";
import { BASE_DOMAIN, siteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteUrl("/sitemap.xml"),
    host: new URL(BASE_DOMAIN).host,
  };
}
