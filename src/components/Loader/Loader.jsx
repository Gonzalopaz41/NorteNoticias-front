import React from 'react';
import { BallTriangle } from 'react-loader-spinner'

function Loader() {
  return (
    <div>
      <BallTriangle height="100" width="100" color="red" ariaLabel="Cargando" />
    </div>
  )
};

export default Loader;
