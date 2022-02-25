let getMoviesBySearchTerm = async () => {
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=37416b82";
    let response = await fetch(url);

    let data = await response.json();
    
};
console.log(getMoviesBySearchTerm());