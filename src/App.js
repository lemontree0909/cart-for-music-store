import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Instruments from './Components/InstrumentsComponents/Instruments';

function App() {
  return (
    <div className="App">

      <div className='nav'>
        <Cart/>
      </div>

      <div className='navbar'>
        <AllCategories/>
      </div>

      <div className='products'>
        <Instruments/>
      </div>

    </div>
  );
}

export default App;
