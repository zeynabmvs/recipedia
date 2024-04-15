import { Link } from "react-router-dom";


function Navbar(){
    return(     
        <nav>
            <ul className="flex gap-4">
                <li><Link to="/" className="hover:underline decoration-2 underline-offset-4">Home</Link></li>
                <li><Link to="/favorites" className="hover:underline decoration-2 underline-offset-4">Favorites</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar; 