let page_number = 1;
let apiLink = `https://api.themoviedb.org/3/movie/popular?api_key=1abb3e68d878be1155d781ce812f80a8&language=en-US&page=${page_number}`;
let input = document.querySelector(".searchInp");
let totalPages = 0;



function bildMovies(data) {
  let Results = data.results;
  let Movies = Results.map((Movie) => {
    return {
      Title: Movie.title,
      Description: Movie.overview,
      Rate: parseFloat(Movie.vote_average).toFixed(1),
      Poster: `https://image.tmdb.org/t/p/w500/${Movie.poster_path}`,
    };
  });

  Movies.forEach((Movie) => {
    let card = document.createElement("div");
    let rate = document.createElement("span");
    let poster = document.createElement("img");
    let title = document.createElement("p");



    let description = document.createElement("p");



    
    card.className = "card";
    rate.className = "rate";
    rate.innerHTML = "⭐" + Movie.Rate;

    poster.className = "Poster";
    poster.src = Movie.Poster;

    title.className = "title";
    title.innerHTML = "Title: " + Movie.Title;

    description.className = "description";
    description.innerHTML = "Description: " + Movie.Description;

    card.appendChild(rate);
    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(description);

    document.querySelector(".container").appendChild(card);
  });
}



function cleanContainer() {
  let container = document.querySelector(".container");
  Array.from(container.children).forEach((movie) => {
    console.log(movie);
    movie.remove();
  });
}



async function generateMovies(url) {
  let response = await fetch(url);
  let data = await response.json();
  totalPages = data.total_pages;
  cleanContainer();
  bildMovies(data);
}

generateMovies(apiLink);



let inputin = document.querySelector(".searchInp");
let pageNum = document.querySelector(".num");
let counter = document.querySelector(".nxt");
let counter1 = document.querySelector(".prev");

inputin.addEventListener("input", () => {
  let search_text = inputin.value;
  let searchLink = `https://api.themoviedb.org/3/search/movie?api_key=1abb3e68d878be1155d781ce812f80a8&language=en-US&query=${search_text}`;
  generateMovies(searchLink);
});



counter.addEventListener("click", () => {
  if (page_number < totalPages) {
    page_number++;
    let apiLink2 = `https://api.themoviedb.org/3/movie/popular?api_key=1abb3e68d878be1155d781ce812f80a8&language=en-US&page=${page_number}`;
    generateMovies(apiLink2);
    pageNum.innerHTML = page_number;
  }
});



counter1.addEventListener("click", () => {
  if (page_number > 1) {
    page_number--;
    let apiLink2 = `https://api.themoviedb.org/3/movie/popular?api_key=1abb3e68d878be1155d781ce812f80a8&language=en-US&page=${page_number}`;
    generateMovies(apiLink2);
    pageNum.innerHTML = page_number;
  }
});
