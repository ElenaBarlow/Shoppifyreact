import React, {useState } from "react";
import { MenuItems2 } from './MenuItems2';
import { Link } from 'react-router-dom';
import './Dropdown2.css'; 

function Dropdown2() {
  const [click2, setClick2] = useState(false)
  
  const handleClick2 = () => setClick2(!click2)
    
  return (
    <ul onClick={handleClick2} className={click2 ? 'dropdown-menu2 clicked' : 'dropdown-menu2'}>
     {MenuItems2.map((item, index) => {
       return (
        <li key={index}>
            <Link className={item.cName} to={item.path} onClick={() =>
            setClick2(false)}>
                {item.title}
            </Link>
        </li>
       )
     })}
    </ul>
    
 )
} 

export default Dropdown2;