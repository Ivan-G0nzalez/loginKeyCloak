import { Children } from 'react';
import Generic from '../generic/Generic';
import LoginKeycloak from '../components/LoginUpdate';

const routes = [
  {
    path: '/',
    element: <Generic />,
    children: [
      {
        path: '/auth',
        element: <LoginKeycloak />,
      },
    ],
  },
  {
    path: '*',
    element: <h1 style={{ color: 'red' }}>Error</h1>,
  },
];

export default routes;
