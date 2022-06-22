import "./NavBar.css"
import {Link} from 'react-router-dom'
import CartWidget from "./CartWidget/CartWidget"

import 'typeface-quicksand';



export default function NavBar() {

    
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list__item"><Link className="navbar-list__link" to="/">Home</Link></li>
                <li className="navbar-list__item"><Link className="navbar-list__link" to="category/camisetas">Camisetas</Link></li>
                <li className="navbar-list__item"><Link className="navbar-list__link" to="category/shorts">Shorts</Link></li>
                <li className="navbar-list__item"><Link className="navbar-list__link" to="category/botines">Botines</Link></li>
                <CartWidget/>
            </ul>
        </nav>

    )
}

