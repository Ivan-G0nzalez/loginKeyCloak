import HelloWorld from "./components/HelloWorld";
import LoginKeycloak from "./components/LoginUpdate";
import Login from "./components/Login";

import { useRoutes } from "react-router-dom";
import routes from "./routes/RouterApp";

import "./App.css";

function App() {
  const elemet = useRoutes(routes);
  return elemet;
}

export default App;
