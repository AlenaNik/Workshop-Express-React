import React, {Component} from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="pa3 pa4-ns">
            <a className="link dim black b f4 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Workshop</a>
        <div className="tc pb3">
            <NavLink to="/" className="link dim gray f5 f4-ns dib mr3">Fancy thing</NavLink>
            <NavLink to="/counter" className="link dim gray f5 f4-ns dib mr3" >Counter</NavLink>
            <NavLink to="/timer" className="link dim gray f5 f4-ns dib mr3">Timer</NavLink>
            <NavLink to="/myapi" className="link dim gray f5 f4-ns dib mr3">Custom API</NavLink>
        </div>
        </nav>
    );
};

export default Navigation;