let getMoviesBySearchTerm = async (searchString) => { // By title (t)
    let url = `http://www.omdbapi.com/?t=` + searchString + `&apikey=c6773180`; //http://www.omdbapi.com/?apikey=d82a00f4&
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data by Search Term is: ", data); // Can do data.Title, data.Year, data.Released, etc
}

//getMoviesBySearchTerm("Despicable Me");


let getMovieDetailsById = async (ID) => { // By ID (i)
    let url = `http://www.omdbapi.com/?i=` + ID + `&apikey=c6773180`; 
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data by ID is: ", data);
}

//getMovieDetailsById("tt1285016");

