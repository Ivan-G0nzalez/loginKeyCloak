import UserService from "../services/userServices";
import Cookies from "js-cookie";

function LoginKeycloak() {
  UserService.keycloakInit();
  Cookies.set("Token", UserService.getToken(), { expires: 1 });
  Cookies.set("username", UserService.getUsername(), { expires: 1 });

  const handleLogout = () => {
    Cookies.remove("Token");
    Cookies.remove("username");
    UserService.doLogout();
  };
  const handleLogIn = () => {
    UserService.doLogin();
  };

  return (
    <div>
      <h1>user: {UserService.getEmail() !== null ? <p>{UserService.getEmail()}</p> : ""}</h1>
      {UserService.isLoggedIn() ? (
        <div>
          <button type="button" onClick={handleLogout}>
            Cerrar Session
          </button>
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleLogIn}>
            Cerrar Session
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginKeycloak;
