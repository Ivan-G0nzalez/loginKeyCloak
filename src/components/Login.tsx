import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'realtest',
  clientId: 'my-public-client',
});

function Login() {
  // const [logged, setLogged] = useState(false);
  // const [firstName, setFirstName] = useState<any>(undefined);
  // const [lastName, setLastName] = useState<any>(undefined);
  // const keycloak = createKc();

  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keycloak, setKeycloak] = useState<any>(null);
  const [keycloakCl, setkeycloakCl] = useState<any>(null);

  useEffect(() => {
    const keycloak = Keycloak({
      url: 'http://localhost:8080/',
      realm: 'realtest',
      clientId: 'my-public-client',
      //   publicClient: true,
    });
    keycloak
      .init({
        onLoad: 'login-required',
      })
      .then(authenticated => {
        // setkeycloakCl(keycloak);
        // setAuthenticated(authenticated);
      })
      .catch(error => {
        console.error('Keycloak initialization error', error);
      });
  }, []);

  // function createKc() {
  //   const kc = new Keycloak({
  //     url: 'http://localhost:8080/',
  //     realm: 'Prueba',
  //     clientId: 'public-client',
  //   });
  //   kc.onAuthSuccess = () => {
  //     kc.loadUserProfile().then(profile => {
  //       setFirstName(profile.firstName);
  //       setLastName(profile.lastName);
  //     });
  //     setLogged(true);
  //     setInterval(() => refreshToken(), 4 * 60 * 1000);
  //   };
  //   kc.onTokenExpired = () => refreshToken();
  //   return kc;
  // }

  // function refreshToken() {
  //   keycloak
  //     .updateToken(-1)
  //     .then(refreshed => {
  //       console.log(
  //         refreshed
  //           ? 'Token was successfully refreshed'
  //           : 'Token is still valid'
  //       );
  //     })
  //     .catch(() => {
  //       console.error('Failed to refresh token');
  //     });
  // }

  // function signIn() {
  //   keycloak
  //     .init({
  //       onLoad: 'login-required',
  //       flow: 'standard',
  //       redirectUri: window.location.origin,
  //     })
  //     .catch(() => {
  //       console.error('Failed to initialize Keycloak');
  //     });
  // }

  // function signOut() {
  //   keycloak
  //     .init({})
  //     .then(() => {
  //       keycloak.logout({
  //         redirectUri: window.location.origin,
  //       });
  //     })
  //     .catch(() => {
  //       console.error('Failed to initialize Keycloak');
  //     });
  // }

  // useEffect(() => {
  //   keycloak
  //     .init({
  //       onLoad: 'check-sso',
  //     })
  //     .then(authenticated => {
  //       setLogged(authenticated);
  //       if (authenticated) {
  //         keycloak.loadUserProfile().then(profile => {
  //           setFirstName(profile.firstName);
  //           setLastName(profile.lastName);
  //         });
  //       }
  //     })
  //     .catch(() => {
  //       console.error('Failed to initialize Keycloak');
  //     });
  // }, []);

  return (
    <div>
      {' '}
      <h1>abc</h1>{' '}
      {authenticated ? (
        <div>cerrar sesion</div>
      ) : (
        <form onSubmit={}>
          {' '}
          <p>
            {' '}
            <label htmlFor='username'>Username:</label>{' '}
            <input
              type='text'
              id='username'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />{' '}
          </p>{' '}
          <p>
            {' '}
            <label htmlFor='password'>Password:</label>{' '}
            <input
              type='password'
              id='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />{' '}
          </p>{' '}
          <button type='submit'>Login</button>{' '}
        </form>
      )}
    </div>
  );
}

export default Login;
