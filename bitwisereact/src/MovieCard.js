import { getMoviesBySearchTerm, getMoviesById } from './utils';
import { useState } from 'react';
import Modal from "./components/Modal"
import MovieDetails from './MovieDetails';
import './styles.css'



export default function MovieCard(props){
    const [showModal, setShowModal] = useState(false);
    
    function handleClick(){
        setShowModal(true);
        //setMovieData(getMoviesBySearchTerm(this.props.title));
    }   

    let getMoviesBySearchTerm = async (searchString) => { // By title (t)
        let url = `http://www.omdbapi.com/?t=` + searchString + `&apikey=c6773180`; //http://www.omdbapi.com/?apikey=d82a00f4&
        let response = await fetch(url);
        let data = await response.json();
        console.log("Data by Search Term is: ", data); // Can do data.Title, data.Year, data.Released, etc
    }

    console.log("MovieCard prop is: ", props) // React wants you to return one object that has things so like a Div Container with everything inside it
    return ( // <> </> is React Fragment to contain/wrap everything to return ONLY 1 thing
        <> 
            <div >
                <img className = "MovieImage" src={props.posterUrl}/>
            </div> 
            <div className = "MovieTitle">{props.title}</div>
            <span className= "MovieMiscCard">{props.type}</span>

            <button className="MovieMiscCard2" onClick={handleClick}>Details</button>
            {showModal && 
                (
                    <Modal show={showModal} onClose={setShowModal} >
                        <div>
                            <MovieDetails/>
                        </div>
                    </Modal>  
                )
             }
        </>
    );
}