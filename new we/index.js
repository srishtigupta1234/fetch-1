const api_key = "8d58d553"
async function makeRequest(){
    try{
        let url = `http://www.omdbapi.com/?apikey=${api_key}&s=Batman&y=2008`;
        let res = await fetch(url)
        let raw = await res.json()
        console.log("data:",raw);
        if (raw.Response === "True") {  // Check if the response is successful
            append(raw.Search);  // Pass the array of movies to the append function
        } else {
            console.log("Error:", raw.Error);  // Log any errors returned by the API
        }
    } catch(err){
        console.log("err",err)
    }
}
makeRequest();
function append(movies){
    let container = document.getElementById("container");
    container.innerHTML = '';

    movies.forEach((movie)=>{
        let div = document.createElement("div");
        let poster = document.createElement("img")
        poster.setAttribute("src",movie.Poster)
        let h1 = document.createElement("h1")
        h1.innerText = movie.Title;
        let h2 = document.createElement("h2")
        h2.innerText = movie.Year;
        let h3 = document.createElement("h4")
        h3.innerText = movie.Type; 

        div.append(poster,h1,h2,h3);
        container.append(div);
    });
    
}
document.getElementById("search").addEventListener("input", effect);
function effect(){
    let name = document.getElementById("search").value.trim().toLowerCase();
    let allMovies = document.querySelectorAll("#container div")
    allMovies.forEach((movieDiv)=>{
        let movieTitle = movieDiv.querySelector("h1").innerText.toLowerCase();
        if(movieTitle.includes(name)){
            movie.style.display = "block";
        } else {
            movieDiv.style.display = "none";
        }
    })
}   