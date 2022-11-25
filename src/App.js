import "./assets/css/global.css";
import VenomFall from "./assets/img/Venom Fall.png";
import Footer from "./components/footer/Footer";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Origin from "./components/origin";
import Strengths from "./components/strengths/Strengths";
import Symbolism from "./components/symbolism";
import Weakness from "./components/weakness";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div class="link-stage"></div>
      <Origin />
      <div class="link-stage"></div>
      <Symbolism />
      <div class="link-stage"></div>
      <Strengths />
      <div class="link-stage">
        <img src={VenomFall} alt="venom-fall" class="vn-fall" />
      </div>
      <Weakness />
      <Footer />
    </>
  );
}

export default App;
