import React from "react";
import { Link } from "react-router";

const SideNav = () => {
    return (
        <div className="side-nav">
            <Link to="/" className="side-nav-link">Home</Link>
            <Link to="/create" className="side-nav-link">Create a Crewmate</Link>
            <Link to="/gallery" className="side-nav-link">Crewmate Gallery</Link>
        </div>
    )
}

export default SideNav