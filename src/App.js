import './App.css';
import  Layout  from "./Components/Layout/Layout"
import  Home  from "./Components/Home/Home"
import { Routes, Route } from 'react-router-dom';
import About  from "./Components/About/About"
import Students from "./Components/Students/Students"
import Footer from "./Components/Footer/Footer"
import Companies from './Components/Companies/Companies';
import Careers from './Components/Careers/Careers';
import Apply from './Components/Apply/Apply';


function App() {
  
  return (
    <>
    <Layout />
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
