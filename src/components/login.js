import { useRef, useState } from "react";
import Header from "./header";
import {validateData} from "../utils/validate"
const Login = () =>{
    const [isSignInForm,setIsSignForm] =useState('true');
    const [errorMessage,setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    //console.log(email);
    const handleButttonClick = () =>{
        const message = validateData(email.current.value,password.current.value);
        setErrorMessage(message);
    }
    const toggleSignInForm =()=>{
        setIsSignForm(!isSignInForm);
    }
    return(
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="logo"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm?"Sign In":"Sign Up"}
            </h1>
            {
                !isSignInForm && (<input
                type="text"
                placeholder="Full Name"
                className="p-4 my-4 w-full bg-gray-700"
                />)
            }
            <input
            type="text"
            ref = {email}
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
            />
            <input
            type="password"
            ref = {password}
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButttonClick}>
                {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm?"New to Netflix:Sign Up Now":"Already registered? Sign In Now."}
            </p>
        </form>
    </div>
    )
}
export default Login;