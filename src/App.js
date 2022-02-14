import './App.css';
import { About } from './components/About/About';
import Intro from './components/Intro/Intro';

function App() { 
  return (
    <div className="App">
      <Intro>Intro</Intro>
      <About></About>
    </div>
  );
}

export default App;
