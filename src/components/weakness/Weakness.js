import React from "react";
import Stage5 from "../../assets/img/Stage5.png";
import Reflect from "../../assets/img/Weakness Reflect.png";
import Rooster from "../../assets/img/weakness rooster.png";
import Weasel from "../../assets/img/weakness weasel.png";

const WeaknessImage = ({ active }) => {
  if (active === 0) return <img src={Reflect} alt="Reflect" class="refl" />;
  if (active === 1) return <img src={Rooster} alt="rooster" class="roos" />;
  return <img src={Weasel} alt="weasel" class="weas" />;
};

const WeaknessText = ({ active }) => {
  if (active === 0)
    return (
      <div class="refl-des">
        <p>
          When a basilisk looks at its own reflection, it can become petrified.
        </p>
      </div>
    );
  if (active === 1)
    return (
      <div class="roos-des">
        <p>
          It can also be killed with the crowing of a rooster, so, until very
          recent times, travelers carried a rooster when they ventured into
          areas where it was said that the basilisks lived.
        </p>
      </div>
    );
  return (
    <div class="weas-des">
      <p>
        Since weasels are immune to the effects of the basilisk's gaze, the
        basilisk can also be killed by the scent of the weasel's odor or pee.
      </p>
    </div>
  );
};

const Weakness = () => {
  const [active, setActive] = React.useState(0);

  const handleClick = (activeId) => {
    setActive(activeId);
  };

  return (
    <div class="stage5" id="weakness">
      <img src={Stage5} alt="st5" class="bg st5" />
      <div class="Reflect">
        <button onClick={() => handleClick(0)}>Reflect</button>
      </div>
      <div class="Rooster">
        <button onClick={() => handleClick(1)}>Rooster</button>
      </div>
      <div class="Weasel">
        <button onClick={() => handleClick(2)}>Weasel</button>
      </div>
      <div class="weak">
        <WeaknessImage active={active} />
      </div>
      <div class="des-box">
        <WeaknessText active={active} />
      </div>
    </div>
  );
};

export default Weakness;
