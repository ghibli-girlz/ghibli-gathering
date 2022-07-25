// MVP goals
// - pull list of movies from the api
// - make basic html and css
// - populate dropdown list with titles of movies
// - update html to include image, title, description of the selected movie

// Stretch goals
// - randomizer
// - filter by runtime / year / etc
// - include more info in the appended html(director, rotten tomatoes score, species(?), etc)
// - "developer's choice" our fav ghibli movies lol
// - error handling
//      - spinny animation if api call is slow to populate the dropdown
//      - placeholder text/img if api is missing data
//  - ghibli fonts

// PSEUDO CODE -- note to sarah: i use the vs code extension "better comments" which makes comments have colors if they have prefixes like *, !, TODO - that's why it's there. i like to delete the * at the beginning of each comment "header" as i complete it, so the uncompleted ones are still in green.

// *Namespace
const app = {};

app.apiUrl = "https://ghibliapi.herokuapp.com/films";

const dropdown = document.querySelector("#movieList");
// ❓ why doesnt this work now? weird

// *Define app init
app.init = () => {
    app.getFilms();
};

// Make API call
// construct the url
const url = new URL(app.apiUrl);

// !POPULATE DROPDOWN
app.getFilms = function () {
    // getting data from the api
    const url = new URL(app.apiUrl);
    fetch(url)
        .then((apiData) => {

            if (apiData.ok) {
                return apiData.json();
            } else {
                alert("The API is broken! Not our fault! Go watch Spiderman or something.");
            }
            // apiData.json()
        })
        .then((jsonData) => {
            // console.log(jsonData);
            // declare dropdown to be appended to later
            const dropdown = document.querySelector("#movieList");

            // *forEach to, for each movie...

            jsonData.forEach((movie) => {
                // *...declare title variable to print to dropdown
                let movieTitle = movie.title;

                // *append the movie title to the dropdown
                const htmlToAppend = document.createElement("option");
                htmlToAppend.innerText = `${movieTitle}`;
                htmlToAppend.value = `${movieTitle}`;

                dropdown.append(htmlToAppend);


            });

            const randomButton = document.querySelector("#randomButton")
            randomButton.addEventListener("click", function (event) {
                event.preventDefault()
                app.printRandom(jsonData);
            });

            // !EVENT LISTENER DROPDOWN
            // *add event listener to dropdown menu change
            document
                .querySelector("#movieList")
                .addEventListener("change", function () {
                    const userSelection = this.value;

                    // *Declaring variables for html containers
                    const poster = document.querySelector(".posterContainer");

                    const title = document.querySelector(".titleContainer");

                    const description = document.querySelector(
                        ".descriptionContainer"
                    );

                    // *clear previous entry (so when you choose a new movie the previous movie's info doesn't stay there)
                    poster.innerHTML = "";
                    title.innerHTML = "";
                    description.innerHTML = "";

                    // *call moviePrint
                    app.moviePrint(jsonData);
                });


        });
};

// !RANDOMPRINT

app.printRandom = (movieData) => {
    const randomSelectedMovie = movieData[Math.floor(Math.random() * movieData.length)];

    // *Declaring variables for html containers
    const poster = document.querySelector(".posterContainer");

    const title = document.querySelector(".titleContainer");

    const description = document.querySelector(".descriptionContainer");

    // *clear previous entry (so when you choose a new movie the previous movie's info doesn't stay there)
    poster.innerHTML = "";
    title.innerHTML = "";
    description.innerHTML = "";

    // defining randomizer variables
    let moviePoster = randomSelectedMovie.image;
    let movieTitle = randomSelectedMovie.title;
    let movieDescription = randomSelectedMovie.description;

    // printing randomizer to the page
    poster.innerHTML = `<img src="${moviePoster}" alt="The poster for: ${movieTitle}">`
    title.innerHTML = `<h2>${movieTitle}<h2>`
    description.innerHTML = `<p>${movieDescription}</p>`

}

// !MOVIEPRINT
app.moviePrint = (movieData) => {
    const selection = document.querySelector("#movieList").value;
    // console.log(selection);
    movieData.forEach((movie) => {
        if (movie.title === selection) {
            // *Declare Poster
            let moviePoster = movie.image;
            console.log(moviePoster);

            // *Declare Title
            let movieTitle = movie.title;
            console.log(movieTitle);

            // *Declare Description
            let movieDescription = movie.description;
            console.log(movieDescription);

            // *create innerhtml with matching css to be appended with variables for movie info
            const poster = document.querySelector(".posterContainer");

            const title = document.querySelector(".titleContainer");

            const description = document.querySelector(
                ".descriptionContainer"
            );

            poster.innerHTML = `<img src="${moviePoster}" alt="The poster for: ${movieTitle}">`
            title.innerHTML = `<h2>${movieTitle}<h2>`
            description.innerHTML = `<p>${movieDescription}</p>`

            // *append that to the page
        }
    });
};

// *run function to append movie info (poster, title, descrption)

// *call app.init
app.init();
