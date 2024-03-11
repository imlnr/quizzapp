import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainroutes from './allroutes/Mainroutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Mainroutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
