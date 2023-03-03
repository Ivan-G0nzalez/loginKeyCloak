import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "http://localhost",
  realm: "internship",
  clientId: "react_cl",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
