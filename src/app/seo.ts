export const BASE_DOMAIN = "https://www.amestoy.com.ar/";

export const siteUrl = (path = "") => new URL(path, BASE_DOMAIN).toString();
