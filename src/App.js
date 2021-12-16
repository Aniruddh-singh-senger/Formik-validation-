import React from 'react';
import './App.css';
import Forms from './Forms';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {

  return (
    <>
    <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Forms" element={<Forms />} />
            
            <Route path="/Home" element={<Home />} />
            
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App;
