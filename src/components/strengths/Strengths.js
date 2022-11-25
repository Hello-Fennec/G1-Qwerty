import Layer1 from "../../assets/img/Stage4-Layer1.png";
import Layer2 from "../../assets/img/Stage4-Layer2.png";
import Basilisk from "../../assets/img/Strength Basilisk.png";

const Strengths = () => {
  return (
    <div class="stage4" id="strengths">
      <img src={Layer1} alt="st4-l1" class="bg st4-l1" />
      <img src={Layer2} alt="st4-l2" class="bg st4-l2" />
      <div class="basi-st4">
        <img src={Basilisk} alt="basi-str" />
      </div>
      <div class="text-box1">
        <h2>Eyes</h2>
        <p>
          When a live victim looked directly into the Basilisk's eyes, it
          resulted in instant death, making it even more dangerous than an
          acromantula. When a victim looked indirectly at the Basilisk's eyes,
          such as its reflection, they would merely become Petrified, similar to
          the stare of a Gorgon.
        </p>
      </div>
      <div class="text-box2">
        <h2>Canine</h2>
        <p>
          Basilisk venom is extremely powerful, and can kill a person in a
          little more than a minute at best, making the person drowsy and
          blurry-sighted before they die.
        </p>
      </div>
    </div>
  );
};

export default Strengths;
