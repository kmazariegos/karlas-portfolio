import './App.css';
import { About } from './components/About/About';
import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useState } from 'react';


function App() { 
  const [dark, setDark] = useState(false)
  return (
    <div className="App">
      <Toggle setDark={setDark}></Toggle>
      <Intro dark={dark}>Intro</Intro>
      <About dark={dark}></About>
      <ProductList dark={dark}></ProductList>
      <Contact dark={dark}></Contact>
    </div>
  );
}

export default App;
