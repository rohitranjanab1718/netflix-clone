import Browse from "./browse";
import Header from "./header";
import Login from "./login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const Body = () =>{
    const appRouter = createBrowserRouter([
       {
        path: "/",
        element:<Login/>
       },
       {
        path:"/browse",
        element:<Browse/>
       }
    ])
    return(
        <div> 
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;