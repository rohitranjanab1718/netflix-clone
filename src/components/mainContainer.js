import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackGround from './videoBackGround';
import VideoTitle from './videoTitle';
const MainContainer = () => {
  console.log("rohit");
  const movies = useSelector((store)=>
    store.movies?.nowPlayingMovies
  )
  console.log(movies);

  if (!movies) return;

  const mainMovie = movies[0];
  const {original_title,overview,id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview = {overview}/>
      <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer