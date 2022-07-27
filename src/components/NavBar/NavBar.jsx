import "./NavBar.css"
import {Link} from 'react-router-dom'
import CartWidget from "./CartWidget/CartWidget"
import 'typeface-quicksand';

export default function NavBar() {

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list__item"><Link className="navbar-list__link" to="/">Home</Link></li>
                <li className="navbar-list__item"><Link className="navbar-list__link" to="categoria/camisetas">Camisetas</Link></li>
                <li className="navbar-list__item"><Link className="navbar-list__link" to="categoria/shorts">Shorts</Link></li>
                <li className="navbar-list__item"><Link className="navbar-list__link" to="categoria/botines">Botines</Link></li>
                <Link to="/cart"><CartWidget/></Link>
            </ul>
        </nav>
    )
}