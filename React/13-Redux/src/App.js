import { Provider } from 'react-redux';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import { store, persister } from './Store';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <Navbar />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;