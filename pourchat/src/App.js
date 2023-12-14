import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/index.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Accommodation from './pages/AccommodationPage/Accommodation.jsx'
import About from './pages/AboutPage/About.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'

function App() {
    return (
      <Router>
        <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    );
  }

export default App;
