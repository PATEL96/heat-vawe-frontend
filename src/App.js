import './App.css';
import AllProductsPage from "./pages/AllProductsPage";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Regestration from './pages/Registration';
import Home from "./pages/Home";
import ProductSingle from "./pages/Product";
// import ProductsPage from "./pages/ProductsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  const user=false;
  return (
    
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>          
          <Route path="/products/" element={<AllProductsPage/>}/>          
          {/* <Route path="/products/:category" element={<ProductsPage/>}/>           */}
          <Route path="/product/:productId" element={<ProductSingle/>}/>          
          <Route path="/cart" element={<Cart/>}/>          
          <Route path="/login" element={user? <Navigate to="/"/>:<Login/>}/>          
          <Route path="/register" element={user? <Navigate to="/"/>:<Regestration/>}/>          
      </Routes>
  </Router>
  );
}

export default App;