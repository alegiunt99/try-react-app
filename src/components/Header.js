import React from 'react';
import '../App.css';
// import logo from '../assets/logo.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="App-header">
        
        <div className='container header-container'>

          <div className='logo'>
            {/* <img src="./assets/logo.png" alt='vim'/> */}
            <h1>REACT APP</h1>
          </div>

          <div className='navbar'>
            <Navbar />
          </div>

          <div className='login-buttons'>
            <button className='btn-classic'> Accedi </button>
            <button className='btn-classic'> Registrati </button>
          </div>
        </div>
    </div>
  )
}

export default Header