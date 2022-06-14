import "./NavBar.css"
import NavLink from "./NavLink/NavLink"
import CartWidget from "./CartWidget/CartWidget"
import 'typeface-quicksand';

export default function NavBar() {
    return (

        <nav className="navbar">
            <ul className="navbar-list">
                <NavLink text="Home"/>
                <NavLink text="Camisetas"/>
                <NavLink text="Shorts"/>
                <NavLink text="Botines"/>
                <CartWidget/>
            </ul>
        </nav>

    )
}

