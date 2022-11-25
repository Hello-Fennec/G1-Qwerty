import Layer1 from "../../assets/img/Stage2-Layer1.png";
import Layer2 from "../../assets/img/Stage2-Layer2.png";
import Basilisk from "../../assets/img/Origin Basilisk.png";

const Origin = () => {
  return (
    <div class="stage2" id="origin">
      <img src={Layer1} alt="st2-l1" class="bg st2-l1" />
      <img src={Layer2} alt="st2-l2" class="bg st2-l2" />
      <div class="frog">
        <img src={Basilisk} alt="frog" />
      </div>
      <div class="text-box">
        <h2>Origin</h2>
        <p>
          The basilisk is called "king" because it is reputed to have on its
          head a mitre, or crown-shaped crest. Stories of the basilisk show that
          it is not completely distinguished from the cockatrice. The basilisk
          is alleged to be hatched by a cockerel from the egg of a serpent or
          toad (the reverse of the cockatrice, which was hatched from a
          cockerel's "egg" incubated by a serpent or toad). In Medieval Europe,
          the description of the creature began taking on features from
          cockerels. It has a venomous strike and in some versions of the myth,
          it has the ability to breathe fire.
        </p>
      </div>
    </div>
  );
};

export default Origin;
