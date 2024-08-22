import React from 'react';
import Router from './Config/Router';
import { Provider } from 'react-redux';
import { persister, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { SearchProvider } from './Components/Search/SearchContext';

function App() {
  return (
    <>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persister}>
     <SearchProvider>
        <Router />
     </SearchProvider>
      </PersistGate>
     </Provider>
    </>
  );
}

export default App;
