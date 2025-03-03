import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Loginpage from './components/Loginpage';
import MainPage from './components/MainPage';
import BookingPage from './components/Bookingpage';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation(); 
    return (
        <div className="App">
            
            {location.pathname !== '/login' && <Navbar />}

            <Routes>
                {/* Home Route */}
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Features />
                        </>
                    }
                />

                {/* Login Route */}
                <Route path="/login" element={<Loginpage />} />
                <Route path="/main" element={<MainPage />} />
                
                 <Route path="/" element={<MainPage />} />
                 <Route path="/booking/:id" element={<BookingPage />} />
      
   
  

            </Routes>
            
        </div>
        
    );
}

export default App;