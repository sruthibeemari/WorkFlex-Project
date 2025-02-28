import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons
import '../App.css';

const MainPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        "/workspace1.jpg",
        "/workspace2.webp",
        "/workspace3.jpg"
    ];
    const workspaces = [
        { id: 1, image: "/cardws1.jpg", name: "Cozy Café", description: "Perfect for remote work with great coffee." },
        { id: 2, image: "/images/workspace2.jpg", name: "Modern Office", description: "Spacious and well-equipped for teams." },
        { id: 3, image: "/images/workspace3.jpg", name: "Library Nook", description: "Quiet and peaceful workspace for deep focus." },
        { id: 4, image: "/images/workspace4.jpg", name: "Outdoor Patio", description: "Work with a fresh breeze and great views." }
    ];
    

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="main-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
                {menuOpen && (
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/bookings">My Bookings</Link>
                        <Link to="/favourites">Favourites</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
            </nav>

            {/* Hero Section with Slideshow & Icons */}
            <div className="hero">
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Workspace ${index + 1}`} />
                    ))}
                </div>
                {/* Left & Right Slide Icons */}
                <button className="prev" onClick={prevSlide}><ChevronLeft size={32} /></button>
                <button className="next" onClick={nextSlide}><ChevronRight size={32} /></button>
            </div>

            {/* Location Cards */}
            {/* <div className="location-section">
                <h1>Explore Workspaces</h1>
                <div className="location-cards">
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="location-card">
                            <img src={`/images/workspace${index}.jpg`} alt={`Workspace ${index}`} />
                            <h2>Workspace {index}</h2>
                            <p>Cozy and comfortable workspace with all amenities.</p>
                            <div className="buttons">
                                <button className="book-button">Book Now</button>
                                <button className="fav-button">Add to Favourites</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="location-section">
    <h1>Explore Workspaces</h1>
    <div className="location-cards">
        {workspaces.map((workspace) => (
            <div key={workspace.id} className="location-card">
                <img src={workspace.image} alt={workspace.name} />
                <h2>{workspace.name}</h2>
                <p>{workspace.description}</p>
                <div className="buttons">
                    <button className="book-button">Book Now</button>
                    <button className="fav-button">Add to Favourites</button>
                </div>
            </div>
        ))}
    </div>
</div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Workspace Finder. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;
