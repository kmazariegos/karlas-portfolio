import './App.css';
import { About } from './components/About/About';
import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';

function App() { 
  return (
    <div className="App">
      <Intro>Intro</Intro>
      <About></About>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
