import './App.css';
import { About } from './components/About/About';
import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Footer from './components/Footer/Footer';



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
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default App;
