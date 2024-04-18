import { useState } from "react";
import Header from "./header";

const Login = () =>{
    const [isSignInForm,setIsSignForm] =useState('true');
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
        <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
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
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
            />
            <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
            />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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