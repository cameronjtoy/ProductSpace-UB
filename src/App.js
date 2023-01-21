import './App.css';
import { Header } from "./Components/Header/Header.jsx"
import { Navbar } from "./Components/Navbar/Navbar.jsx"
import { Home } from "./Components/Home/Home.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Header/>
    </div>
    
  );
}

export default App;
