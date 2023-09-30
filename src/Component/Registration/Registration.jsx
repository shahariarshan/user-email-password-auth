import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebasee/Firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Registration = () => {
    const [registerError,setRegisterError] =useState('')
    const [regiSuccess,setRegSuccess] =useState('')
    const [showPassword,setShowPassword]=useState(false)

    const handelRegister =e =>{
        e.preventDefault();
        // console.log('submit here')
        const email =e.target.email.value;
        const password= e.target.password.value;
        const accept =e.target.terms.checked
        console.log(email,password,accept)
        
        if(password.length <6){
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('In your password You have to give At least One Upper Case')
            return;
        }
        else if(!accept){
            setRegisterError("Accept Your terms and conditions")
            return;
        }

        // reset
        setRegisterError('')
        setRegSuccess('')


        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user)
            setRegSuccess('Your Registration Is SuccessFull ')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message);
        })
    }
    return (
        <div className="border">
           <div className="mx-auto md:w-[50%]">
           <h2 className="text-3xl">Registration Here</h2>
          <form  onSubmit={handelRegister}  >
            <input className="mb-3 w-3/4 h-9 text-white p-3 bg-slate-500 rounded-sm " required type="text" placeholder="Enter Email" name="email" />
            <br />
           <div>
           <input className="mb-3 w-3/4 relative h-9 text-white  p-3 bg-slate-500 rounded-sm"
             type={showPassword ? "text" : "password"}
              placeholder="Password"
               name="password" />
               <span className="absolute mt-2 -ml-6" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
               </span>
            <br />
          
           </div>


           <div className="mb-2">
         <input className="mr-2" type="checkbox" name="terms" id="terms" />
         <label htmlFor="terms">Accept Our <a href="">Terms and Condition</a></label>
         </div>
            <input className="btn btn-primary mb-3 w-3/4 " type="Submit" value="Register" />
          <br />
        

          </form>
          {
            registerError && <p className="text-yellow-500 mb-3">{registerError}</p>
          }
          {
            regiSuccess && <p className="text-green-700 mb-3">{regiSuccess}</p>
          }
           <p>Already Have An Account?Go to the <Link to='/login' className="font-bold text-blue-600">Log In!</Link></p>
          
           </div>
        </div>
    );
};

export default Registration;