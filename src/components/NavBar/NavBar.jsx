import "./NavBar.css"
import NavLink from "./NavLink/NavLink"
import CartWidget from "./CartWidget/CartWidget"

export default function NavBar() {
    return (

        <nav className="navbar">
            <ul className="navbar-list">
                <NavLink/>
                <NavLink/>
                <NavLink/>
                <NavLink/>
                <CartWidget/>
            </ul>
        </nav>

    )
}

