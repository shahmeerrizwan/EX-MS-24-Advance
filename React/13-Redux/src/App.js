import { Provider } from 'react-redux';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import store from './Store';


function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Footer />
      </Provider>
    </>
  );
}

export default App;