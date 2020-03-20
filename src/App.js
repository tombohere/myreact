import React from 'react';

import { AppProvider } from './context/AppContext';
import Frame from './js/components/Frame';

const App = () => {
  return (
    <AppProvider>
      <Frame />
    </AppProvider>
  );
};

export default App;