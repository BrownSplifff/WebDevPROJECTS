import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Fav" className="nav-link">Favourites</Link>
        </div>
    </nav>
}
export default NavBar