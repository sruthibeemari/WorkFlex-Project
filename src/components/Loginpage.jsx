import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../App.css';

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();  

    const handleSignup = async () => {
        setError('');
        setSuccess('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Signup successful! 🎉');
            setEmail('');
            setPassword('');
            navigate('/main');  
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess('Login successful! 🎉');
            setEmail('');
            setPassword('');
            navigate('/main');  
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setSuccess('');
        try {
            await signInWithPopup(auth, googleProvider);
            setSuccess('Google sign-in successful! 🎉');
            navigate('/main'); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome!</h1>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                        required
                    />
                    <button type="submit" className="login-button login-button-blue">
                        Login
                    </button>
                </form>

                <button onClick={handleSignup} className="login-button login-button-green">
                    Sign Up
                </button>

                <div className="login-divider">OR</div>

                <button onClick={handleGoogleSignIn} className="login-button login-button-red">
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Loginpage;
