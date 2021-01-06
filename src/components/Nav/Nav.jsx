import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgPokemon } from "react-icons/cg";
import { IconContext } from "react-icons";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className="navbar">
        <button onClick={toggleOpen} className="burger-button">
          <AiOutlineMenu />
        </button>
        <Link to="./" className="logo">
          <CgPokemon />
          <span>pokedex app </span>
        </Link>
      </div>
      <nav className={open ? "sidebar open" : "sidebar"}>
        <ul className="menu">
          <li className="menu-close">
            <button onClick={toggleOpen} className="menu-close-button">
              <AiOutlineClose />
            </button>
          </li>
          <IconContext.Provider value={{ className: "menu-icons" }}>
            {routes.map((route) => {
              return (
                <li key={route.title} className="menu-list">
                  <NavLink
                    exact
                    to={route.path}
                    className="menu-item"
                    activeClassName="menu-item__selected"
                  >
                    {route.icon} <span>{route.title} </span>
                  </NavLink>
                </li>
              );
            })}
          </IconContext.Provider>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
