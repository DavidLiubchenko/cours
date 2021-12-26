import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav id="mainNavP">
                    <div><Link to='/first'> first</Link></div>
                    <div><Link to='/second'>second </Link></div>
                    <div><Link to='/third'>third </Link></div>
                </nav>
    );
}

export default Navigation;
