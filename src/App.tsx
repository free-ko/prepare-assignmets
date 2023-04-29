import React from 'react';
import { Router } from '~/router';

import { GlobalLayout } from '~/styles';

const App = () => {
  return (
    <>
      <GlobalLayout />
      <Router />
    </>
  );
};

export default App;
