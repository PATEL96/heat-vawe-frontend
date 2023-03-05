import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfuctsListed from "./components/ProductsListed";

function App() {
  return (
    <div>
      <Navbar />

      <ProfuctsListed/>

      <Carousel />

      <Footer/>
    </div>
  );
}

export default App;