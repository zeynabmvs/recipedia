import { Link } from "react-router-dom";


function Navbar(){
    return(     
        <nav>
            <ul className="flex gap-4">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/favorites" className="link">Favorites</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar; 