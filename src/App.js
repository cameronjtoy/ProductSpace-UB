import './App.css';
import { Header } from "./Components/Header/Header.jsx"
import { Navbar } from "./Components/Navbar/Navbar.jsx"
import { Home } from "./Components/Home/Home.jsx"
import { Footer } from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Header/>
      <Footer/>
    </div>
    
  );
}

export default App;
