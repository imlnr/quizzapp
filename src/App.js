import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainroutes from './allroutes/Mainroutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          <Navbar />
          <Mainroutes />
        </div>
      </ChakraProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
