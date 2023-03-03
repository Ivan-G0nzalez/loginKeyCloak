import keycloak from "../../keycloak";
import { useEffect, useState } from "react";

const _kc = keycloak;

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 *
 */
function keycloakInit() {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakCl, setkeycloakCl] = useState<any>(null);

  useEffect(() => {
    keycloak
      .init({
        flow: "hybrid",
        onLoad: "login-required",
      })
      .then((authenticated) => {
        setkeycloakCl(keycloak);
        setAuthenticated(authenticated);
      })
      .catch((error) => {
        console.error("Keycloak initialization error", error);
      });
  }, []);
}

const subject = _kc.subject;

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  keycloakInit,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;
