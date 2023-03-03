import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../../keycloak";
import App from "../App";

function protectedRotes() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  );
}

export default protectedRotes;
