// import { useRef, useState } from "react";
// import Header from "./header";
// import {validateData} from "../utils/validate"
// import { auth } from "../utils/firebase";
// import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
// const Login = () =>{
//     const [isSignInForm,setIsSignForm] =useState('true');
//     const [errorMessage,setErrorMessage] = useState(null);
//     const email = useRef(null);
//     const name = useRef(null);
//     const password = useRef(null);
//     //console.log(email);
//     const handleButttonClick = () =>{
//         const message = validateData(email.current.value,password.current.value);
//         setErrorMessage(message);
//         if (message) return null;
//         //signin signup
//         if (!isSignInForm){
//             createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
//                 .then((userCredential) => {
//                     // Signed up 
//                     const user = userCredential.user;
//                     console.log(user);
//                     updateProfile(user,{displayName:name.current.value,photoURL:"https://avatars.githubusercontent.com/u/12824231?v=4"});
//                     console.log(user);
//                     // ...
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     setErrorMessage(errorCode+' '+errorMessage);
//                     // ..
//                 });
//         }else{
//             signInWithEmailAndPassword(auth, email.current.value,password.current.value)
//                 .then((userCredential) => {
//                     // Signed in 
//                     const user = userCredential.user;
//                     console.log(user);
//                     // ...
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     setErrorMessage(errorCode+' '+errorMessage);
//                 });
//         }
//     }
//     const toggleSignInForm =()=>{
//         setIsSignForm(!isSignInForm);
//     }
//     return(
//     <div>
//         <Header/>
//         <div className="absolute">
//             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
//             alt="logo"/>
//         </div>
//         <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
//             <h1 className="font-bold text-3xl py-4">
//                 {isSignInForm?"Sign In":"Sign Up"}
//             </h1>
//             {
//                 !isSignInForm && (<input
//                 type="text"
//                 ref= {name}
//                 placeholder="Full Name"
//                 className="p-4 my-4 w-full bg-gray-700"
//                 />)
//             }
//             <input
//             type="text"
//             ref = {email}
//             placeholder="Email Address"
//             className="p-4 my-4 w-full bg-gray-700"
//             />
//             <input
//             type="password"
//             ref = {password}
//             placeholder="Password"
//             className="p-4 my-4 w-full bg-gray-700"
//             />
//             <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
//             <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButttonClick}>
//                 {isSignInForm?"Sign In":"Sign Up"}
//             </button>
//             <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
//                 {isSignInForm?"New to Netflix:Sign Up Now":"Already registered? Sign In Now."}
//             </p>
//         </form>
//     </div>
//     )
// }
// export default Login;
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
