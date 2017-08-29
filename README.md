## Weather App
The content of the application can be found in /app folder.
The app is created using <a href="https://github.com/react-boilerplate/react-boilerplate/" target="_blank">React boilerplate</a>

## Demo
<a href="https://ricsam.github.io/weather-app" target="_blank">https://ricsam.github.io/weather-app</a>

## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/ricsam/weather-app`
2. Move to the appropriate directory: `cd weather-app`.
3. Run `yarn install` or `npm install` in order to install dependencies
4. Run `npm start` to run the dev server.
5. Run `npm run build` to build the project

## “Features”
1. There are no tests and eslint has not been configured, thus the command npm test will throw errors.

## About
The gist of the application consists of the <a href="https://github.com/ricsam/weather-app/tree/master/app/containers" target="_blank">containers</a>
  * App
  * HomePage
  * Search
  * Tile
  * Tiles
  
### The containers
  * App handles the inter-container flowing data
  * HopePage is the first container rendered, hosting Search and Tiles
  * Search consists of the search box which handles selection of a weather location.
  * the Tiles are a wrapper for Tile
  * Tile independently handles the logic of fetching the weather data for the corresponding location, AKA weather station.

## Design
The general dataflow of the application looks like this, not everything is inlcuded in this flowchart:

![Flowchart](https://raw.githubusercontent.com/ricsam/weather-app/master/weather%20app.png)

## Some thoughts about the current application, mainly a TODO:
  * Move html component code from the containers into new components.
  * Fix the CSS and HTML to match the design specification.
  * Cleanup the tile folder.
  * Refactor app.js, remove react-router
