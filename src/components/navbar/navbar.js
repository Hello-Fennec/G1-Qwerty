import Vector1 from "../../assets/img/Vector_1.png";

const Navbar = () => {
  return (
    <nav class="sidebar">
      <div class="logo">
        <img src={Vector1} alt="logo" width="100px" />
        <a href="#home">
          <p>BASILISK</p>
        </a>
      </div>
      <ul class="navbar">
        <li>
          <a href="#origin" class="nav-func">
            Origin
          </a>
        </li>
        <li>
          <a href="#symbolism" class="nav-func">
            Symbolism
          </a>
        </li>
        <li>
          <a href="#strengths" class="nav-func">
            Strengths
          </a>
        </li>
        <li>
          <a href="#weakness" class="nav-func">
            Weakness
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
