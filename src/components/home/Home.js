import Layer1 from "../../assets/img/Stage1-Layer1.png";
import Layer2 from "../../assets/img/Stage1-Layer2.png";
import Basilisk from "../../assets/img/Home Basilisk 1.png";

const Home = () => {
  return (
    <div className="stage1" id="home">
      <h1 className="home-title">Basilisk</h1>
      <img src={Layer1} alt="st1-l1" className="bg st1-l1" />
      <img src={Layer2} alt="st1-l2" className="bg st1-l2" />
      <div className="basilisk">
        <img src={Basilisk} alt="basilisk" />
      </div>
    </div>
  );
};

export default Home;
