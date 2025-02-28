import React, { useState } from 'react';
import Loginpage from './Loginpage'; 

const Hero = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div style={styles.hero}>
            <h1 style={styles.title}>Find Your Perfect Workspace</h1>
            <p style={styles.subtitle}>Book, Work, and Connect Seamlessly</p>

            {/* Open Modal on Click */}
            <button onClick={() => setIsLoginOpen(true)} style={styles.ctaButton}>
                Get Started
            </button>

            {/* Modal Popup */}
            {isLoginOpen && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <Loginpage />
                        <button onClick={() => setIsLoginOpen(false)} style={styles.closeButton}>
                            <b style={{color:'white'}}>✖</b>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    hero: {
        backgroundImage: 'url(../public/logo3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        position: 'relative',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
    },
    ctaButton: {
        padding: '0.8rem 2rem',
        backgroundColor: '#333',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: 'rgba(27, 25, 25, 0.7)',
        padding: '2rem',
        borderRadius: '10px',
        width: '400px',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        background: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
};

export default Hero;
