// import { useRef, useState, useEffect } from "react";
// import './Zipcode.css';


// export const Zipcode = () => {
  
//   const handleKeyDown = e => {
//     if (e.key === "") {
//       e.preventDefault();
//     } else if (e.key === "!") {
//       e.preventDefault();
//     } else if (e.key === "@") {
//       e.preventDefault();
//     } else if (e.key === "£") {
//       e.preventDefault();
//     } else if (e.key === "$") {
//       e.preventDefault();
//     } else if (e.key === "#") {
//       e.preventDefault();
//     } else if (e.key === "%") {
//       e.preventDefault();
//     } else if (e.key === "^") {
//       e.preventDefault();
//     } else if (e.key === "&") {
//       e.preventDefault();
//     } else if (e.key === "*") {
//       e.preventDefault();
//     } else if (e.key === "(") {
//       e.preventDefault();
//     } else if (e.key === ")") {
//       e.preventDefault();
//     } else if (e.key === "_") {
//       e.preventDefault();
//     } else if (e.key === "=") {
//       e.preventDefault();
//     } else if (e.key === "+") {
//       e.preventDefault();
//     } else if (e.key === "[") {
//       e.preventDefault();
//     } else if (e.key === "]") {
//       e.preventDefault();
//     } else if (e.key === "{") {
//       e.preventDefault();
//     } else if (e.key === "}") {
//       e.preventDefault();
//     } else if (e.key === "\\") {
//       e.preventDefault();
//     } else if (e.key === "|") {
//       e.preventDefault();
//     } else if (e.key === ";") {
//       e.preventDefault();
//     } else if (e.key === ":") {
//       e.preventDefault();
//     } else if (e.key === "'") {
//       e.preventDefault();
//     } else if (e.key === "\"") {
//       e.preventDefault();
//     } else if (e.key === ",") {
//       e.preventDefault();
//     } else if (e.key === "<") {
//       e.preventDefault();
//     } else if (e.key === ".") {
//       e.preventDefault();
//     } else if (e.key === ">") {
//       e.preventDefault();
//     } else if (e.key === "/") {
//       e.preventDefault();
//     } else if (e.key === "?") {
//       e.preventDefault();
//     } else if (e.key === "~") {
//       e.preventDefault();
//     }
//   };
  

//   const userRef = useRef();

//   const [zip, setZip] = useState('');
//   const [validZip, setValidZip] = useState(false);
//   const [zipFocus, setZipFocus] = useState(false);
  
//   useEffect(() => {
//     const result = /^[A-za-z0-9-]{3,10}$/;
//     const zip = result;
//     console.log(zip);
//     setValidZip(zip);
// }, [zip]) 

//   const handleChange = () => {
//    if (Zipcode.length < 3) { 
//     return !validZip;
//    } 
//   }

//   return (
//      <div className="zip-container"> 
//        <input 
//         type="text" 
//         id="zipcode"
//         ref={userRef}
//         autoComplete="off"
//         minLength={3} 
//         maxLength={10} 
//         onKeyDown={handleKeyDown} 
//         onChange={handleChange}
//         onFocus={() => setZipFocus(true)}
//         onBlur={() => setZipFocus(false)} 
//        />  

//        <span className={validZip || !zip ? "hide" : "invalid"}>
//           <i class="fa-solid fa-xmark"  />
//         </span>

//        <p className={zipFocus && zip && !validZip ? "instructions" && 'info-text' : "offscreen"}>
//           <i class="fa-solid fa-circle-info" /> 
//            Characters from 3 - 23. <br /> 
//            Letters, numbers and hyphens allowed.  
//        </p>
//       </div>
//   ); 

// };
