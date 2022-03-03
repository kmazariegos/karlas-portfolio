import './App.css';
import { About } from './components/About/About'; 
import FirstProject from './components/FirstProject/FirstProject';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { ThemeContext } from './context';
import Footer from './components/Footer/Footer';
import Navi from './components/Navi/Navi';
import Introduction from './components/Introduction/Introduction';
import SecondProject from './components/SecondProject/SecondProject'
import ThirdProject from './components/ThirdProject/ThirdProject'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
    <div
      style={{
        backgroundColor: darkMode ? "#516dd3" : "#ffe9fd",
        color: darkMode ? "#ffd7e2" : "#283b7d"
      }}
    >
      <Navi></Navi>
      <Toggle/>
      <Introduction></Introduction>
      <About/>
      <ProductList/>
      <FirstProject />
      <SecondProject/>
      <ThirdProject/>
      <Contact/>
      <Footer></Footer>
    </div>
    </Router>
  );
};

export default App;
