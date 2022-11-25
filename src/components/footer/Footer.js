import Arm from "../../assets/img/Arm.jpg";
import Baitong from "../../assets/img/Baitong.jpg";
import Meili from "../../assets/img/Meili.jpg";
import Nes from "../../assets/img/Nes.jpg";
import Gun from "../../assets/img/Gun.jpg";
import Guy from "../../assets/img/Guy.jpg";

const Footer = () => {
  return (
    <footer class="credit">
      <div class="front-end">
        <h2 class="f-title">Front-End</h2>
        <div class="arm">
          <img src={Arm} alt="arm" />
          <h3>Arm</h3>
        </div>
        <div class="baitong">
          <img src={Baitong} alt="baitong" />
          <h3>Baitong</h3>
        </div>
        <div class="meili">
          <img src={Meili} alt="meili" />
          <h3>Meili</h3>
        </div>
      </div>
      <div class="web-design">
        <h2 class="w-title">Web-Design</h2>
        <div class="nes">
          <img src={Nes} alt="nes" />
          <h3>Nes</h3>
        </div>
        <div class="kun">
          <img src={Gun} alt="kun" />
          <h3>Kun(Gun)</h3>
        </div>
      </div>
      <div class="infrastructure">
        <h2 class="i-title">Infrastructure</h2>
        <div class="guy">
          <img src={Guy} alt="guy" />
          <h3>Guy</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
