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
    1. The browser should appear at http://localhost:3000/ with a "Welcome to React" message and logo
1. Look at Netflix main landing page when not logged in
    1. The main page has a Signin button. In this lab we are not going to implement real security. 
    We will add the signin button to log in with a hard coded user. This user object will be stored in the application state.
1. Look at Netflix main landing page after loggin in
    1. There is a top bar with amongst other things a search field and the user with a logout option
    1. There is a Jumbotron/Hero images highlighting one title. This includes a play button.
    1. There is a vertical list of categories
    1. Each categorie has a horizontal list of titles.
    1. Each title has an image like http://image.tmdb.org/t/p/w300/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg and title
    1. Hovering over a title image makes it larger
    1. Clicking on the down arrow shows more info about the title
    1. Clicking on the play button starts the player in full screen

