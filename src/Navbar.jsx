import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Galerie</Link></li>
                <li><Link to="/contacts">Kontakty</Link></li>
                <li><Link to="/reservation">Rezervace</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;