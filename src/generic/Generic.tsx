import { Outlet } from 'react-router-dom';

function Generic() {
  return (
    <div>
      <h2>Prueba</h2>
      <Outlet />
    </div>
  );
}

export default Generic;
