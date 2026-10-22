
const baseUrl = "https://hightechengineeringsolution.com";

export default function sitemap() {
  const routes = [
    "",
    "/contact",
    "/electric-fence",
    "/gate-moter",
    "/portfolio",
    "/sliding-gate-motor",
    "/swing-gate-motor",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

