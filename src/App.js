import './App.css';
import { About } from './components/About/About';
import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';


function App() { 
  return (
    <div className="App">
      <Toggle></Toggle>
      <Intro>Intro</Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
}

export default App;
