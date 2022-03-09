import './styles.css'
import MovieCard from './MovieCard';

export default function MovieList(props){
    console.log("MovieList prop is: ", props)
    return (
        <>
           {props.movies[0][1].map(movie => 
                <p>
                    <MovieCard
                        posterUrl = {movie.Poster}  
                        title = {movie.Title}
                        type = {movie.Type}
                    />
                </p>)}
        </>
    )
}