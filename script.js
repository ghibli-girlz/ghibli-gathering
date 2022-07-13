// MVP goals
//     - pull list of movies from the api
//     - make basic html and css
//     - populate dropdown list with titles of movies
//     - update html to include image, title, description of the selected movie
// Stretch goals
//     - randomizer
//     - filter by runtime / year / etc
//     - include more info in the appended html(director, rotten tomatoes score, species(?), etc)
//     - "developer's choice" our fav ghibli movies lol
//     - "error image"



// PSEUDO CODE -- note to sarah: i use the vs code extension "better comments" which makes comments have colors if they have prefixes like *, !, TODO - that's why it's there. i like to delete the * at the beginning of each comment "header" as i complete it, so the uncompleted ones are still in green.

// *Namespace
const app = {}

// *Define app init

// *Make API call
    // * figure out CORS authentication

    // *with those results:
    // *for each: add movie title to dropdown (so it's pre-populated with list of movie titles on pageload)
        // *declare movie title variable
        // *function to add it to the dropdown list

    // *add event listener to dropdown menu change

        // *clear previous entry (so when you choose a new movie the previous movie's info doesn't stay there)

        // *run function to append movie info (poster, title, descrption)
            // *define variables for movie info
            // *create innerhtml with matching css to be appended with variables for movie info
            // *append that to the page


// *call app.init