import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import { items } from './components/Data';

function App() {
  
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <NavBar cart={cart} setData={setData}/>
          <Routes>
            <Route path="/" element={<Product cart={cart} setCart={setCart}  items={data}/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/search/:term" element={<SearchItem setCart={setCart}/>} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
        </Router>
    </>
  )
}

export default App
