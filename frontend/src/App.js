import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Homes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from './components/Blog';
import About_me from './components/About_me';
import Portfolio from './components/Portfolio';
import PorDetail from './components/PorDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/blog' element={ <Blog />} />
          <Route path='/about' element={<About_me />} />
          <Route path="/portfolio"  element={<Portfolio />} />
          <Route path="/portfolioDetails/:id"  element={<PorDetail />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

