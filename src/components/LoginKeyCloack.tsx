import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'node',
  clientId: 'node_cl',
});

function LoginKeycloak() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keycloak, setKeycloak] = useState<any>(null);
  const [keycloakCl, setkeycloakCl] = useState<any>(null);

  
  useEffect(() => {
    const keycloak = Keycloak({
      url: 'http://localhost:8080/',
      realm: 'node',
      clientId: 'node_cl',
      //   publicClient: true,
    });
    keycloak
      .init({
        // flow: "hybrid",        // onLoad: "login-required",        // promiseType: "native",        // checkLoginIframe: false,      })
        onLoad: 'login-required',
      })
      .then(authenticated => {
        setkeycloakCl(keycloak);
        setAuthenticated(authenticated);
      })
      .catch(error => {
        console.error('Keycloak initialization error', error);
      });
  }, []);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('click');
    console.log(keycloakCl, 'kyCL');
    keycloakCl
      .login({
        username: 'Ivan.Gonzalez@Jala.University',
        password: '12345*',
        grant_type: 'password',
        scope: 'openid',
      })
      .then(() => {
        console.log('Login successful');
      })
      .catch((error: any) => {
        console.error('Login error', error);
      });
  };
  return (
    <div>
      {' '}
      <h1>abc</h1>{' '}
      {authenticated ? (
        <div>cerrar sesion</div>
      ) : (
        <form onSubmit={handleSubmit}>
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
export default LoginKeycloak;
