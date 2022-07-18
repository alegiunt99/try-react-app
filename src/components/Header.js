import React from 'react';
import '../App.css';
// import logo from '../assets/logo.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="App-header">
        
        <div className='container'>

          <div className='logo'>
            {/* <img src="./assets/logo.png" alt='vim'/> */}
            <h1>REACT APP</h1>
          </div>

          <div className='navbar'>
            <Navbar />
          </div>

          <div>
            <button> Accedi </button>
            <button> Registrati </button>
          </div>
        </div>
    </div>
  )
}

export default Header