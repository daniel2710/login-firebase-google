import React, { useState } from 'react';
import Logo from '../../assets/Enter OTP-cuate.png';
import '../../styles/login.css';
// react icons
import {BsGoogle} from 'react-icons/bs';
import {BiLogIn} from 'react-icons/bi';

//Firebase
import appFirebase from '../../firebase/credentials';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const provider = new GoogleAuthProvider();

const auth = getAuth(appFirebase);

const Login = () => {

    const [registro, setRegistro] = useState(true);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registro === false){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }

    const loginGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error)
        });
      }

    return (
    <div className="container-fluid p-0 m-0 text-center">
        <div className="row p-0 m-0 align-items-start">
            <div className="col-md-6 d-flex flex-column login">
                <div className='form-login w-50'>
                    <h1 className='mb-4'>{registro ? 'Welcome Back!' : 'Register'}</h1>
                    <span className='mb-4'>Welcome back! please enter your credentials</span>
                    <form onSubmit={handleSubmit} className='d-flex flex-column mt-4'>
                        <label className='mb-4'>Email</label>
                        <input className='mb-4' placeholder='Enter your Email' type="text" id='email' name='email' required />
                        <label className='mb-4'>Password</label>
                        <input className='mb-4' placeholder='Enter your Password' type="password" id='password' name='password' required/>
                        <button type='submit' className='mb-4 btn btn-sm btn-signin'>{registro ? <div>Sign In <BiLogIn/></div> : 'Sign Up'}</button>
                        <button type='button' onClick={loginGoogle} className='mb-4 btn btn-sm btn-primary'>Google <BsGoogle/></button>
                    </form>
                    <div className='mb-4'>
                        <h6 className='d-flex justify-content-evenly'>{registro ? <>Dont have an account? <p onClick={()=>setRegistro(!registro)}>Sign Up</p></> : <>Do you already have an account? <p onClick={()=>setRegistro(!registro)}>Sign In</p></>}</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-6 logo">
                <div className='logo-img'>
                    <img src={Logo} alt='logo' />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Login;