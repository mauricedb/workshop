# Lab instructions

1. Install development environment
    1. Install Node + NPM
    1. Install create-react-app using `npm install create-react-app -g`
    1. Make sure you have an editor you can use. For example Sublime, Visual Studio Code, Atom, Webstorm or something similar
1. Create and run a basic React app
    1. `create-react-app nitflex`
    1. `cd nitflex`
    1. Creating a new Git repository here and adding all the files with an initial commit is higly recommended. If you do so commit 
    all changes after every change made during this lab.
    1. `npm start`
    1. The browser should appear at [http://localhost:3000/](http://localhost:3000/) with a "Welcome to React" message and logo
1. Look at Netflix main landing page when not logged in
    1. The main page has a Signin button. In this lab we are not going to implement real security. 
    We will add the signin button to log in with a hard coded user. This user object will be stored in the application state.
    ![Netflix Login](images/Netflix-Login.PNG)

1. Look at Netflix main landing page after loggin in
    1. There is a top bar with amongst other things a search field and the user with a logout option
    1. There is a Jumbotron/Hero images highlighting one title. This includes a play button.
    ![Netflix home](images/Netflix-1.PNG)

    1. There is a vertical list of categories
    1. Each categorie has a horizontal list of titles.
    1. Each title has an image like http://image.tmdb.org/t/p/w300/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg and title
    ![Netflix home](images/Netflix-2.PNG)

    1. Hovering over a title image makes it larger
    ![Netflix home](images/Netflix-3.PNG)
    1. Clicking on the down arrow shows more info about the title
    ![Netflix home](images/Netflix-4.PNG)
    1. Clicking on the play button starts the player in full screen
1. We will use Bootstrap as our CSS framework
    1. `npm install bootstrap --save`
    1. Remove existing import of CSS file
    1. Import Bootstrap CSS with ```import '../node_modules/bootstrap/dist/css/bootstrap.min.css';```
1. Create main layout in App.js. 
    1. Render a wrapping div with class container
    1. Add user property as state, default to null
    1. Render `LoginPage` if user is null. Pass loginAsUser() function to LoginPage so it can alter the state.
    1. Render `MainPage` is user is set
1. Login in each time isn't very nice
    1. Add "Remember me on this device"
    1. Save user in `localStorage` if set
    1. In `componentDidMount()` check `localStorage` for user and set if there. 
1. Create a `Header` component and render this in the MainPage
    1. Pass the `user` so we can display the name.
1. Niet meer hier: Add a `movies.js`
    1. Create two components `MoviesContainer` and `MoviesPresentation`.
    1. `MoviesContainer` does and AJAX request and renders `MoviesPresentation` after movies have loaded
    1. Add `AjaxLoading` indicator to show before the movies AJAX request is done.
    1. Use fetch() to load the /movies.json
        1. If your browser doesn't support fetch natively use the NPM [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) package
1. Add a `genre-list.js`
    1. Create a `GenreList` component
    1. Build an array of all genres. This can be done in the `render()` based on the `movies` prop
    1. Filter the movies per genre.
    1 Render a `GenreRow` per genre passing in the movies for that genre.
    
1. Add a `genre-row.js` with `GenreRow` component
    1. Render a `GenreRowMovie` for the first 6 movies

1. Add a `genre-row-movie` with `GenreRowMovie` component
    1. Render the movie `title` and `backdrop_path`

1. Add the hover efect to `GenreRowMovie` so it grows and display a down arrow when the mouse is over it

1. Add `ExpandedGenreRowMovie` to be show when user clicks the down arrow in `GenreRowMovie`
    1. Add this to `GenreRow` and keep track in it's state if a movie is expanded

1. Add support for playing movies.
    1. Add a `playing` movie to the `MainPage` state.
    1. Add a `PlayingMovie` component
        1. Takes a `movie` object and a `stopPlaying` function as props
    1. If playing a movie render `PlayingMovie` else render `Movies` like before.


1. Add the large movie at the top of the page
    1. Add a `jumbo-movie.js` with a `JumboMovie` component
    1. Takes a single movie as prop.
    1. Render the movie `title` and `backdrop_path` just like `GenreRowMovie`
    1. Add CSS classes to make `row` and image `img-responsive`.
    1. Add this component to the `MoviesPresentation` passing in the first movie.


1. Add a `` with `` component
1. Add a `` with `` component
1. Add a `` with `` component
1. Add a `` with `` component


1. Add support for ESLint
npm i eslint-config-airbnb --save
eslint, eslint-plugin-import, eslint-plugin-react, and eslint-plugin-jsx-a11y
create  .eslintrc
    "extends": "airbnb"
Open package.json
    Add `"eslint": "eslint ./src/**/*.js"` to the `scripts` section
    