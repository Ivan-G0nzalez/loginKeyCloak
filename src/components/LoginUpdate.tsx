import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'node',
  clientId: 'node_cl',
});
function LoginKeycloak() {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakCl, setkeycloakCl] = useState<any>(null);

  useEffect(() => {
    const keycloak = Keycloak({
      url: 'http://localhost:8080/',
      realm: 'node',
      clientId: 'node_cl',
    });
    keycloak
      .init({
        flow: 'hybrid',
        onLoad: 'login-required',
        // promiseType: "native",        // checkLoginIframe: false,
      })
      .then(authenticated => {
        setkeycloakCl(keycloak);
        setAuthenticated(authenticated);
        // react router dom redir dashboard
      })
      .catch(error => {
        console.error('Keycloak initialization error', error);
      });
  }, []);

  console.log(keycloakCl, 'cliente keycloak');

  const handleLogout = () => {
    keycloakCl.logout();
  };

  return (
    <div>
      <h1>abc</h1>
      {authenticated ? (
        <div>
          <button type='button' onClick={handleLogout}>
            Cerrar Session
          </button>
        </div>
      ) : (
        <h1>NO AUTIENTICADO</h1>
      )}
    </div>
  );
}

export default LoginKeycloak;
