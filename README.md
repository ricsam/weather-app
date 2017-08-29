## Weather App
The content of the application can be found in /app folder.

## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/ricsam/weather-app`
2. Move to the appropriate directory: `cd weather-app`.
3. Run `yarn install` or `npm install` in order to install dependencies
4. Run `npm start` to run the dev server.
5. Run `npm run build` to build the project

## About
The gist of the application consists of the [containers](https://github.com/ricsam/weather-app/tree/master/app/containers)
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
