import React, { Component } from 'react';

// stateless functional component

const Navbar = (props) => {
    return (
            <nav className="navbar navbar-light bg-light">
                <h2 className="navbar-brand text-danger" href="#">Navbar</h2>
                <span className="badge badge-warning p-2">{props.totalCounters}</span>
                <button onClick={props.onReset} className="btn btn-info">Reset</button>
            </nav>
    )
}

export default Navbar;