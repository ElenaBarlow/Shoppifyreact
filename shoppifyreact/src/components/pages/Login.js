import React from 'react';
import '../../components/Login.css'
import { useEffect } from "react";
import { UserAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth} from '../../components/Firebase'
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import images from '../images'
import { Link } from 'react-router-dom';





export default function Login() {
  
  
  const signInWithFacebook = () => {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
      .then((re)=>{
        console.log(re);
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
    
    const { googleSignIn, signInWithGithub, user } = UserAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/home";
    
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error)
      }
    }; 

    useEffect(() => {
      if(user != null) {
        navigate('/english')
      }
    }, [user])
    
    
    

    


    return (
    
     
     <div className='container'> 
      <form>
      <img className="shop" src={images.signup} />
      
      <div className="form-info"> 
      <img src={images.shoppify} className='logo' alt="app-logo" />
       <h2>WELCOME TO SHOPPIFY!</h2>
       <p className='subhead'>Trusted community of buyers and sellers</p>
       <div className='form'>
       
       <div className='email-password'> 
         <div className='field'>
            <label htmlFor='email'>EMAIL:</label>
            <input type={"email"} name="email" placeholder='Email'  /> 
         </div>
         
         <div className='field'>
            <label>PASSWORD:</label>
            <input type={"password"} name="password" placeholder='Password' />
         </div> 
        </div> 
         <button className='loginBtn'>Submit</button> 
        
        <div className='social-logins'>
         <GoogleLoginButton onClick={handleGoogleSignIn} />
         <FacebookLoginButton className="fb-login" onClick={signInWithFacebook} />
         <GithubLoginButton onClick={signInWithGithub} />
        </div> 
        
         
         <p>Don't have an account?</p>
        <div className='register'> 
         <Link to='/register'>
            Register
          </Link>
        </div>
       </div> 
     </div>
      </form>
    </div>
   );
}