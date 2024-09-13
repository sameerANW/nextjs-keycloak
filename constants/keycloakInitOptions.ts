// these are set in next.config.js
export const keycloakInitOptions = {
  realm: process.env.keycloakRealm || "appnetwise01",
  url: process.env.keycloakUrl || "http://localhost:8080/",
  clientId: process.env.keycloakClientId || "frontend-client"
}
