import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebasee/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {
    const [registerError,setRegisterError] =useState('')
    const [regiSuccess,setRegSuccess] =useState('')
    const emailRef =useRef(null)
    

    const logInPage = e => {
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        setRegisterError('')


        signInWithEmailAndPassword(auth,email,password)
        .then( result =>{
            console.log(result.user)
            setRegSuccess('LogIN Successfully')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }
  
    const forgetPasswordHandel =() =>{
        const email=emailRef.current.value
        if(!email){
            console.log('Please Provide An email',emailRef.current.value)
            return;
        }
        else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
            console.log('Provide a valid Mail')
            return;
        }

        sendPasswordResetEmail(auth,email)
        .then(() =>{
           alert('please Check your email')
        })
        .catch(error=>{
            console.log(error)
        })
        
    }



    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form   onSubmit={logInPage}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                 type="text" 
                 name="email"
                 ref={emailRef}
                  placeholder="email" 
                  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label onClick={forgetPasswordHandel} className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              </form>
              <p>For new Account? <Link to='/registration' className="font-bold text-blue-600"> Plese Register</Link></p>
              {
            registerError && <p className="text-yellow-500 mb-3">{registerError}</p>
          }
          {
            regiSuccess && <p className="text-green-700 mb-3">{regiSuccess}</p>
          }
         
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default Login;