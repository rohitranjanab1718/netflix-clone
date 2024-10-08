import Header from "./header";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse =()=>{
    useNowPlayingMovies();
    usePopularMovies();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browse;