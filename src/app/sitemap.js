export default async function sitemap() {
  const baseUrl = "https://www.arfsolar.com.br"; // Substituível pelo domínio de publicação real

  const routes = [
    "",
    "/empresa",
    "/energia-solar",
    "/simulacao",
    "/contato",
    "/ar-condicionado/instalacao",
    "/ar-condicionado/infraestrutura",
    "/ar-condicionado/dutos",
    "/ar-condicionado/vrf",
    "/ar-condicionado/chiller",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
