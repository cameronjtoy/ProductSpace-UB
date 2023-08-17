// External Libraries
import { Routes, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Students from "./Components/Students/Students";
import Companies from './Components/Companies/Companies';
import Careers from './Components/Careers/Careers';
import Apply from './Components/Apply/Apply';
import Footer from "./Components/Footer/Footer";
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/students' element={<Students />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/apply' element={<Apply />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
