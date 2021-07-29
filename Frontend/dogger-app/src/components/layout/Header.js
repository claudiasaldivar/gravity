import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="app-header">
            <Link to='/inicio'>
                <p className="nombre-usuario"><span>Ir a Inicio</span></p>
            </Link>
            <nav className="nav-principal">
            </nav>
        </header>
     );
}
 
export default Header;