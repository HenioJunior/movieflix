import { Link } from 'react-router-dom';
import './styles.scss';


type Props = {
    children?: React.ReactNode;
}


function Navbar({ children }:Props) {
    return(
        <nav className="main-navbar">
            <Link to="/"  >
            <h4 className="logo-text">MovieFlix</h4>
            </Link>
            {children}
        </nav>
    )
}

export default Navbar;