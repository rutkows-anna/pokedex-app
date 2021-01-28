import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { CgPokemon } from "react-icons/cg";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { signOut } from "../../state/auth/actions";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <div className="navbar">
        <button
          onClick={toggleOpen}
          className={
            open
              ? "navbar__burger-button navbar__burger-button--hidden"
              : "navbar__burger-button"
          }
        >
          <AiOutlineMenu />
        </button>
        <Link to="./" className="navbar__logo">
          <CgPokemon />
          <span>pokedex app </span>
        </Link>
      </div>
      <nav className={open ? "sidebar open" : "sidebar"}>
        <ul className="menu">
          <li className="menu menu--close">
            <button onClick={toggleOpen} className="menu__close-button">
              <AiOutlineClose />
            </button>
          </li>
          <IconContext.Provider value={{ className: "menu-icons" }}>
            <li className="menu__list">
              <NavLink
                exact
                to={routes.home}
                className="menu__item"
                activeClassName="menu-item__selected"
              >
                <AiFillHome /> <span>Home </span>
              </NavLink>
            </li>
            <li className="menu__list">
              <NavLink
                exact
                to={routes.pokemons}
                className="menu__item"
                activeClassName="menu-item__selected"
              >
                <AiOutlineSearch /> <span>Pokemons</span>
              </NavLink>
            </li>
            <li className="menu__list">
              <Link
                to={routes.home}
                onClick={handleSignOut}
                className="menu__item"
              >
                <AiOutlineLogout /> <span>Sign Out</span>
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
