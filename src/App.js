// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import{ Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <header>

        <Header />
        
      </header>

      <div className='content'>

        {/* content... */}

      </div>

      {/* FOOTER */}
      <div className='footer'>

        <div className='container'>
              <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
