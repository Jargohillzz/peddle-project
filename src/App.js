import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reviews from "./Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
