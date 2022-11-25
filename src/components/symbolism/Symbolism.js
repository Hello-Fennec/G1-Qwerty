import Layer1 from "../../assets/img/Stage3-Layer1.png";
import Layer2 from "../../assets/img/Stage3-Layer2.png";
import Basilisk from "../../assets/img/Symbolism Basilisk.png";

const Symbolism = () => {
  return (
    <div class="stage3" id="symbolism">
      <img src={Layer1} alt="st3-l1" class="bg st3-l1" />
      <img src={Layer2} alt="st3-l2" class="bg st3-l2" />
      <div class="symbol">
        <img src={Basilisk} alt="symbolism" />
      </div>
      <div class="text-box">
        <h2>Symbolism</h2>
        <p>
          The basilisk usually represents evil and is a symbol of death.
          Christianity employed the symbol of the basilisk at times, and as with
          a number of other serpents, immediately cast it as a demon or
          representative of the devil itself. Therefore, it was often depicted
          in Church murals or stone carvings, often slain or being defeated by a
          Christian knight to symbolize the ability to overcome evil.
        </p>
      </div>
    </div>
  );
};

export default Symbolism;
