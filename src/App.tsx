import React from 'react';
import '../src/assets/scss/main.scss';

import PrivateRoute from './routes';
import publicRoutes from './routes/publicRoutes';

function App() {
  return <PrivateRoute appRoutes={publicRoutes} redirectPath={[{ from: '*', to: '/' }]} />;
}

export default App;
