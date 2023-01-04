import React from "react";
import './Button.css';
import { Link } from 'react-router-dom'; 

export function Button() {
    return (
        <Link to='/log-in'>
            <button className="btn">Login</button>
        </Link>
    )
}