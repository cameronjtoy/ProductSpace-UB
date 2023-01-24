import './App.css';
import  Layout  from "./Components/Layout/Layout"
import  Home  from "./Components/Home/Home"
import { Routes, Route } from 'react-router-dom';
import About  from "./Components/About/About"
import Students from "./Components/Students/Students"
import Footer from "./Components/Footer/Footer"


function App() {
  
  return (
    <>
    <Layout />
        <Routes>

            <Route path='/' index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/students' element={<Students />} />

        </Routes>
      <Footer />

    </>
  );
}

export default App;
