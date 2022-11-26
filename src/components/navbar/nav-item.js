const NavItem = ({ title, to }) => {
  return (
    <li>
      <a href={to} class="nav-func">
        {title}
      </a>
    </li>
  );
};

export default NavItem;
