import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function NavBar() {
    return (
         <nav className={css.header}>
            <NavLink to="/" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Movies</NavLink>
      </nav>
    )
}