import './App.css';
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfuctsListed from "./components/ProductsListed";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Carousel />

      <ProfuctsListed />

      <Footer />
    </div>
  );
}

export default App;