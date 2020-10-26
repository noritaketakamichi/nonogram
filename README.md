This project was bootstrapped with [Nonogram game](https://nonogram-staging.herokuapp.com/).<br />
This was created during my time as a student at Code Chrysalis.

![nonogram1](https://user-images.githubusercontent.com/63802620/97154818-bbac0900-17b7-11eb-86de-39ecab8db6c3.gif)

## Available Scripts

In the project directory, you can run:

### `yarn setup`
Youcan migrate table and seed data.<br />
Before this, create database that name is ``nonogram``<br />
This app use postgres database.

### `yarn hack:client`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn hack:server`

Runs server in the development mode.(http://localhost:5000)<br />
The server will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn start`

Migrate table and seed data,runs server, runs client.<br />
You can start only this command


## Personal setting
You should make .env file and write database URL.
