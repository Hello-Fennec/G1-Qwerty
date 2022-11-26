import Vector1 from "../../assets/img/Vector_1.png";
import NavItem from "./nav-item";

const Navbar = () => {
  const navItems = [
    { title: "Origin", to: "#origin" },
    { title: "Symbolism", to: "#symbolism" },
    { title: "Strengths", to: "#strengths" },
    { title: "Weakness", to: "#weakness" },
  ];
  return (
    <nav class="sidebar">
      <div class="logo">
        <img src={Vector1} alt="logo" width="100px" />
        <a href="#home">
          <p>BASILISK</p>
        </a>
      </div>
      <ul class="navbar">
        {navItems.map((item) => (
          <NavItem title={item.title} to={item.to} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
