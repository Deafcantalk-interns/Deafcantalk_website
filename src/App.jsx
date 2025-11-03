import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Gallery from './pages/Gallery';
import AnimationShowcase from './pages/AnimationShowcase';
import './App.css';
import './animations.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/animations" element={<AnimationShowcase />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
