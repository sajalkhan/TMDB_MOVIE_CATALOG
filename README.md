# The Movie Database

## Tools I Have used

1. TMDB API
2. React
3. React Query [for handle server state]
4. React Router
5. Context api with reducer [for handle client state]
6. Storybook
7. SCSS
8. jest
9. puppeteer

## Pre-requisites

1. Npm

## How To Run

1. At first clone the project.
2. Run `yarn` or `yarn install` to install all the dependencies
3. Once installed, run `yarn lint` for fix lint error
4. run `yarn start` for start the project
5. run `yarn test:e2e` for test whole application
6. run `yarn storybook` for start storybook. it's use for build ui separately.
7. The project will run by default on `3000` port.

## Features

##### Home page

1. List of Genres
2. 5 random movies from each genres.
3. A link to get details of the Genre
4. A button with every movie to add the movie to watch list.
5. A watch list item count for show how many items are added to favorite list

##### Genre Page

1. A list of 10 movies sorted by vote_average.
2. A button with every movie to add the movie to watch list.

##### Movie Detail Page

1. Overview of the movies
2. A button to add the movie to watch list.

##### Watched List

1. A list of movies which has been added to watch list.
2. A button for remove from watch list
