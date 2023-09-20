import { NavLink } from "react-router-dom";

const NavBar = () => {
 
  return (
    <>
      <header>
        <nav className="nav">
          <ol className="flex gap-5 navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/meals">Meals</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact</NavLink>
          </ol>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
