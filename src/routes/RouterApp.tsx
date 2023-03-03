import { Children } from "react";
import Generic from "../generic/Generic";
import LoginKeycloak from "../components/LoginUpdate";
import PrivateRoute from "../helpers/PrivateRoute";
import Programs from "../components/programs";

const routes = [
  {
    path: "/",
    element: <Generic />,
    children: [
      {
        path: "/auth",
        element: <LoginKeycloak />,
      },
      {
        path: "/programs",
        element: (
          <PrivateRoute>
            <Programs />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default routes;
