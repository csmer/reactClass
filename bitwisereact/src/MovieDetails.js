import './styles.css'
import { useState } from "react"
import { getMoviesBySearchTerm, getMoviesById } from './utils';

export default function MovieDetails(props){
    console.log("MovieDetails prop is: ", props)

    const [likes, setLikes] = useState(0);

    return ( 
        <> 
            {/* <div >
                <img className = "MovieImage" src={props.posterUrl}/>
            </div>  */}
            <div className = "MovieTitle">{props.title} <span className = "MovieRating">{props.rating}</span></div>
            <div className='MovieContainer'>
                <span className = "MovieMisc">{props.rated} </span>
                <span className = "MovieMisc">{props.runtime}</span>
                <span className = "MovieMisc">{props.genre}</span>
                <button className = "MovieLike" onClick={() => setLikes(likes + 1)}>Likes: {likes}</button>
            </div>
            <div className = "MoviePlot"><b>Plot:</b> {props.plot}</div>
            <div className = "MovieActors"><b>Actors:</b> {props.actors}</div>
        </>
    );
}