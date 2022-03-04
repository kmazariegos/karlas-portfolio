import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Home from './components/Home/Home';
import FirstProject from './components/FirstProject/FirstProject';
import Resume from './components/Resume/Resume'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Footer from './components/Footer/Footer'

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div
        style={{
          backgroundColor: darkMode ? "#516dd3" : "#ffe9fd",
          color: darkMode ? "#ffd7e2" : "#283b7d"
        }}
      >

    <Router>

      <nav className='homeNav'>
        <Link to="/" className='n-logo'>karla</Link>
        <Link to="/projects" className='n-logo-p'> Projects </Link>
        <Link to="/resume" className='n-logo-p'> Resume </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<FirstProject/>}/>
      </Routes>


    </Router>
    <Footer></Footer>
    </div>
  );
};

export default App;
