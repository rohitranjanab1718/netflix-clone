//  import { configureStore } from "@reduxjs/toolkit";
//  import userReducer from "./userSlice";
//  import movieReducer from "./movieslice"
//  const appStore = configureStore({
//     reducer:{
//         user: userReducer,
//         movie: movieReducer
//     },
//  })

//  export default appStore;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;