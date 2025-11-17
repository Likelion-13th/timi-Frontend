import React from 'react';
import {Link} from 'react-router-dom';
const Menu=() => {
    return(
        <div className="menu-container">
            <Link to="/perfume" className="menu-section">
                <img 
                src={`${process.env.PUBLIC_URL}/img/Banner_Vintage.jpg`}
                alt="perfume"
                className="menu-perfume"
                ></img>
                <div className="text-overlay text-perfume">VINTAGE</div>    
            </Link>
            <Link to="/diffuser" className="menu-section">
                <img 
                src={`${process.env.PUBLIC_URL}/img/Banner_Analog.jpg`}
                alt="perfume"
                className="menu-perfume"
                ></img>
                <div className="text-overlay text-diffuser">ANALOG</div>    
            </Link>
        </div>
    );
};

export default Menu;