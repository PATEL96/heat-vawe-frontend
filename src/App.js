import './App.css';
import Carousel from "./components/Carousel";
import AllProductsPage from "./pages/AllProductsPage";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Home from "./pages/Home";
import ProductSingle from "./pages/Product";

function App() {
  return (
    <div>
      {/* <Home/>
      <AllProductsPage/> */
      /* <ProductSingle/> */}
      <Login/>
      <Cart/>
    </div>
  );
}

export default App;