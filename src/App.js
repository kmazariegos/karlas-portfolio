import './App.css';
import { About } from './components/About/About';
import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Footer from './components/Footer/Footer';
import Navi from './components/Navi/Navi';
import Introduction from './components/Introduction/Introduction';
import Test from './components/Test/Test'
import Test2 from './components/Test2/Test2'



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
      <Navi></Navi>
      <Toggle />
      <Introduction></Introduction>
      <Intro />
      <Test></Test>
      <Test2></Test2>
      <About />
      <ProductList />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default App;
