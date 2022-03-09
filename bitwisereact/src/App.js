import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import { getMoviesBySearchTerm, getMoviesById } from './utils';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import MovieList from "./MovieList";
import Form from "./Form";
import Modal from "./components/Modal"
import React from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("Star Wars");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getSearchTerm(){
      const url = `https://www.omdbapi.com/?apikey=c6773180&s=${searchTerm}`
      const response = await fetch(url);
      const objData = await response.json();

      let arrayData = [];
      arrayData = Object.entries(objData);

      setSearchTerm(objData.Title);
      console.log("'setSearchTerm' = ", searchTerm)

      setMovies(arrayData);
      console.log("Movies state array: ", movies)
      console.log("TYPEOF MOVIES: ", typeof movies);
    }
    setIsLoading(true);
    getSearchTerm();


    // if (searchTerm != null){
    //   console.log("getSearchTerm success!")
    //   setError(null);
    //   console.log("Error state array: ", error)
    //   setIsLoading(false);
    //   console.log("isLoading state array: ", isLoading)
    // }
    // if (searchTerm == null){
    //   console.log("getSearchTerm failure")
    //   setError("Error! Could not fetch Movie Data from API")
    //   setMovies([]);
    //   setIsLoading(false);
    // }
  }, []);

  return (
    <div className="App">
      {/* <button className="openModalButton" onClick={() => {setShowModal(true);}}>Open</button>
      {showModal && (
        <Modal show={showModal} onClose={setShowModal} movies={movies}>
          <div>
            <MovieDetails/>
          </div>
        </Modal>  
        )
      } */}

      {/* {movies.map(movie => <div>{movie[0]}</div>)} */}

      <MovieList
        movies = {movies}
      />
     
      {/* {movies.map((movie, index) => (
          <div key={index}>
            {movie}
          </div>
      ))} */}

      {/* <MovieDetails
        className = "MovieDetails"
        posterUrl = {movies[13][1]}
        title = {movies[0][1]}
        rated = {movies[2][1]}
        runtime = {movies[4][1]}
        genre = {movies[5][1]}
        plot = {movies[9][1]}
        actors = {movies[8][1]}
        rating = {movies[16][1]}
      /> */}

      {/* <MovieCard
      posterUrl = {movies[13][1]}
      title = {movies[0][1]}
      type = {movies[19][1]}
      /> */}
    </div>
  );
}

export default App;
