import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className='logo-wrapper' >
                <img className='logo' alt='Logo' src={require("../images/logo.png")} />
                <h1 className='logo-title' >Travel Journal</h1>
            </div>
        </nav>
    );
}

export default Navbar;