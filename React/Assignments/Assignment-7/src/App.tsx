import React from 'react';
import Router from './Config/Router';
import { Provider } from 'react-redux';
import { persister, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persister}>
        <Router />
      </PersistGate>
     </Provider>
    </>
  );
}

export default App;
