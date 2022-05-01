import './Home.css';
import { About } from '../About/About';  
// import FirstProject from '../FirstProject/FirstProject';
import ProductList from '../ProductList/ProductList';
import Contact from '../Contact/Contact';
import Toggle from '../Toggle/Toggle';
import Introduction from '../Introduction/Introduction';
import SecondProject from '../SecondProject/SecondProject'
// import ThirdProject from '../ThirdProject/ThirdProject'

const Home = () => {
  return (
    <div>
      <Toggle/>
      <Introduction></Introduction>
      <About/>
      <ProductList/>
      {/* <FirstProject /> */}
      <SecondProject/>
      {/* <ThirdProject/> */}
      <Contact/>
    </div>
  );
};

export default Home;
