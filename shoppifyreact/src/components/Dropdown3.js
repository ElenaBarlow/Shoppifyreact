import React, {useState } from "react";
import { MenuItems3 } from './MenuItems3';
import { Link } from 'react-router-dom';
import './Dropdown3.css'; 
import images from "./images";

function Dropdown3() {
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)
    
  return (
    <div className="dropdown">
    
    <img src={images.girl} />
    
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
     {MenuItems3.map((item, index) => {
       return (
        <li key={index}>
            <Link className={item.cName} to={item.path} onClick={() =>
            setClick(false)}>
                {item.title}
            </Link>
        </li>
       )
     })}
    </ul>
</div> 
 )
} 

export default Dropdown3;