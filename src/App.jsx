import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ourbread from './Pages/Ourbread';
import Team from './Pages/Team';
import Workshop from './Pages/Workshop';

function App() {
  return (
    <BrowserRouter>
        
        <Navbar />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/bread' element={<Ourbread />} />
            <Route path='/team' element={<Team />} />
            <Route path='/workshop' element={<Workshop />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        
        <Footer />
    
    </BrowserRouter>
  );
}

export default App;