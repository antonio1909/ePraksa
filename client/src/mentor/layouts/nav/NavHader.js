import React, { useState } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo from "../../../images/aspira-uciliste.png";
import logoText from "../../../images/aspira-uciliste.png";

const NavHader = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='nav-header'>
            <Link to='/mentor/dashboard' className='brand-logo'>
                {/* <img className='logo-abbr' src={logo} alt='' /> */}
                <img className='logo-compact' src={logoText} alt='' />
                <img className='brand-title' src={logoText} alt='' />
            </Link>

            <div className='nav-control' onClick={() => setToggle(!toggle)}>
                <div className={`hamburger ${toggle ? "is-active" : ""}`}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
            </div>
        </div>
    );
};

export default NavHader;
