import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebasee/Firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';


const HeroRegister = () => {
const [heroError,setHeroError]=useState('')
const [heroSuccess,setHeroSuccess]= useState('')
const [showHeroIcon,SetHeroIcon] = useState(false)

    const heroRegister =e =>{
        e.preventDefault();
        // console.log('Hero submit')
        const email=e.target.email.value
        const password=e.target.password.value;
        console.log(email,password)

      if (password.length < 6){
        setHeroError('Password should be at least 6 characters with numbers')
        return;
      }

        setHeroError('')
        setHeroSuccess('')

        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
          console.log(result.user)
          setHeroSuccess('Successfully Hero Register')
        })
        .catch(error =>{
          console.error(error)
          setHeroError(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={heroRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" required />
        </div>



        <div>
        <div className=" ">
        <div className="form-control  ">
          <label className="label relative">
            <span  className="label-text">Password</span>
          </label>
          <input  type={showHeroIcon ? "text" : "password"}
           placeholder="password" 
           name="password"
           className="input input-bordered" />
           
        </div>
        <span className="absolute ml-72 mb-10" onClick={() => SetHeroIcon(!showHeroIcon)}>
            {
              showHeroIcon ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }
           </span>
        <div>
        
        </div>
        </div>



          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {
            heroError && <p className="text-green-800 mb-3">{heroError}</p>
          }
          {
            heroSuccess && <p className="text-green-900">{heroSuccess}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default HeroRegister;