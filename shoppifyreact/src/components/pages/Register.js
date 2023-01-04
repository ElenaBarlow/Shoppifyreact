import { useRef, useState, useEffect } from "react";
import React from 'react'
import '../../components/Register.css'
import images from "../images"; 
import { Link } from "react-router-dom";
import axios from "../../api/axios"; 
import Phonepicker from "../Phonepicker";
import Onlyletters from "../Onlyletters";
import Birthdate from "../Birthdate";

const ZIP_REGEX = /^[A-za-z0-9-]{3,10}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,100}(.[a-z{1,100}])?/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'; 


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [zip, setZip] = useState('');
    const [validZip, setValidZip] = useState(false);
    const [zipFocus, setZipFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false); 

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []) 

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidUser(result);
    }, [user]) 
    
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]) 

    useEffect(() => {
        const result = ZIP_REGEX.test(zip);
        console.log(result);
        console.log(zip);
        setValidZip(result);
    }, [zip]) 
      
    

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd]) 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Email Taken');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            }else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    } 

    const handleKeyDown = e => {
      if (e.key === "") {
        e.preventDefault();
      } else if (e.key === "!") {
        e.preventDefault();
      } else if (e.key === "@") {
        e.preventDefault();
      } else if (e.key === "£") {
        e.preventDefault();
      } else if (e.key === "$") {
        e.preventDefault();
      } else if (e.key === "#") {
        e.preventDefault();
      } else if (e.key === "%") {
        e.preventDefault();
      } else if (e.key === "^") {
        e.preventDefault();
      } else if (e.key === "&") {
        e.preventDefault();
      } else if (e.key === "*") {
        e.preventDefault();
      } else if (e.key === "(") {
        e.preventDefault();
      } else if (e.key === ")") {
        e.preventDefault();
      } else if (e.key === "_") {
        e.preventDefault();
      } else if (e.key === "=") {
        e.preventDefault();
      } else if (e.key === "+") {
        e.preventDefault();
      } else if (e.key === "[") {
        e.preventDefault();
      } else if (e.key === "]") {
        e.preventDefault();
      } else if (e.key === "{") {
        e.preventDefault();
      } else if (e.key === "}") {
        e.preventDefault();
      } else if (e.key === "\\") {
        e.preventDefault();
      } else if (e.key === "|") {
        e.preventDefault();
      } else if (e.key === ";") {
        e.preventDefault();
      } else if (e.key === ":") {
        e.preventDefault();
      } else if (e.key === "'") {
        e.preventDefault();
      } else if (e.key === "\"") {
        e.preventDefault();
      } else if (e.key === ",") {
        e.preventDefault();
      } else if (e.key === "<") {
        e.preventDefault();
      } else if (e.key === ".") {
        e.preventDefault();
      } else if (e.key === ">") {
        e.preventDefault();
      } else if (e.key === "/") {
        e.preventDefault();
      } else if (e.key === "?") {
        e.preventDefault();
      } else if (e.key === "~") {
        e.preventDefault();
      }
    };

    return (
       <>
         {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to='/log-in'>
                           Log In
                        </Link>
                    </p>
                </section>
            ) : (
       <section className="container">
           
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
           <form onSubmit={handleSubmit}>
           <img className="shop" src={images.signup} />
           
          <div className="form-info">
           <img src={images.shoppify} className='logo' alt="app-logo" />
           <h2>REGISTER TO SHOPPIFY!</h2>
           <p className='subhead'>Trusted community of buyers and sellers</p>

                  <div className="name-email"> 
                    <div className='field usernamefield'>
                        <label htmlFor="username" className="fullname">
                           Full Name:
                        </label>
            
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validUser ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                          /> 
                        
                        
                        <span className={validUser ? "valid" : "hide"}>
                           <i class="fa-solid fa-check"  />
                        </span>
                        <span className={validUser || !user ? "hide" : "invalid"}>
                           <i class="fa-solid fa-xmark"  />
                        </span>
                      
                        

                        <p id="uidnote">
                           <p className={userFocus && user && !validUser ? "instructions" && 'info-text2' : "offscreen"}>
                           <i class="fa-solid fa-circle-info" /> 
                            Characters from 3 - 23. <br /> 
                            Must begin with a letter. <br />
                            Letters, numbers, underscores, <br /> 
                            hyphens allowed.  
                            </p>
                        </p> 
                    </div>

                    <div className='field eemail'>
                        <label htmlFor="email">
                          Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                         /> 

                       
                         <span className={validEmail ? "valid" : "hide"}>
                           <i class="fa-solid fa-check"  />
                         </span>
                         <span className={validEmail || !email ? "hide" : "invalid"}>
                           <i class="fa-solid fa-xmark" />
                         </span>
                       

                        <p id="eidnote">
                           <p className={emailFocus && email && !validEmail ? "instructions" && 'info-text3' : "offscreen"}>
                           <i class="fa-solid fa-circle-info" />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores,<br />
                            hyphens allowed.
                           </p>
                        </p> 
                      </div>
                    </div>  
                    
                   <div id="phonepicker"> 
                      <div className='field phone'>
                        <label className="phonelabel">
                         Country/Phone Number:
                        </label>
                        <Phonepicker />
                      </div>
                   </div> 
                     
                   <div className="city-zip">
                      <div className="field city">
                        <label htmlFor="cityname">
                          City:
                        </label>
                        <Onlyletters value={user}/>
                      </div> 

                      <div className="field zip">
                        <label htmlFor="zipcode">
                          Zip Code:
                        </label> 
                         
                        <input 
                           type="text" 
                           id="zipcode"
                           ref={userRef}
                           autoComplete="off"
                           minLength={3} 
                           maxLength={10} 
                           onKeyDown={handleKeyDown} 
                           onChange={(e) => setZip(e.target.value)}
                           onFocus={() => setZipFocus(true)}
                           onBlur={() => setZipFocus(false)} 
                        />  

                        <span className={validZip || !zip ? "hide" : "invalid"}>
                          <i class="fa-solid fa-xmark"  />
                        </span>

                        <p className={zipFocus && zip && !validZip ? "instructions" && 'info-text5' : "offscreen"}>
                          <i class="fa-solid fa-circle-info" /> 
                           At least 3 Characters. <br /> 
                             
                        </p>
                      </div>
                    </div>
               
                  <div className="gender-birthdate">
                   <div className="field gender">
                    <label>
                      Gender:
                    </label>
                    <select>
                      <option disabled>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                   </div> 

                   <div className=" field birthdate">
                    <label>
                      Birthday:
                    </label>
                    <Birthdate />
                   </div>
                  </div>

                   <div className="password-confirmpwd">
                     <div className='field password'>
                        <label htmlFor="passsword">
                            Password: 
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            
                            
                        />
                          
                         <span className={validPwd ? "valid" : "hide"}>
                              <i class="fa-solid fa-check" /> 
                         </span>
                         <span className={validPwd || !pwd ? "hide" : "invalid"}>
                              <i class="fa-solid fa-xmark"  />
                         </span>
                          
                        
                        <p id="pwdnote"> 
                          <p className={pwd.length > 0 && !validPwd ? "instructions" && 'info-text4' : "offscreen"}>
                          <i class="fa-solid fa-circle-info" />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters,<br /> 
                            a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                          </p>
                        </p> 
                    </div>
                    
                    <div className='field confirm'>
                      <label htmlFor="confirm_pwd" className="burp">
                            Confirm Password:     
                      </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        
                        <span className={validMatch && matchPwd ? "valid" : "hide"}>
                              <i class="fa-solid fa-check" />
                            </span>
                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                              <i class="fa-solid fa-xmark"  />    
                            </span>
                       
                            <p className={matchFocus && !validMatch ? "instructions" && 'info-text' : "offscreen"}>
                               <i class="fa-solid fa-circle-info" />
                                Must match the first <br />
                                password input field.
                                
                            </p>
                    </div>  
                </div>     
                     
                      <button disabled={!validUser || !validEmail || !validPwd || !validMatch ? true && <Link to='/log-in'>Log In</Link>: false}>Sign Up</button>
                      <p className="login"> 
                        Already registered?<br />
                        <Link to='/log-in'>
                           Log In
                        </Link>
                      </p>
              </div>
            </form>
       </section>
            )}
            </>
    )
}

export default Register