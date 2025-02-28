import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'


const Navbar = () => {
  return (
    <nav style={styles.nav}>
         <Link to="/" style={styles.logoContainer}>
                <img src={logo} alt="Logo" style={styles.logo} className='logo-image' />
            </Link>
      <div style={styles.logo}className='title' >WorkFlex</div>
      
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#5C4B51',
    color: 'black',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
   

   
  },

  loginLink: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};



export default Navbar;