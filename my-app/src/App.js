import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import { Route, Routes } from "react-router-dom"
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sevices" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
