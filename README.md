# Restaurant Reviews App - Stage 1

Project 6 of the [Udacity Front-End Web Developer Nanodegree program](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001), _also part of Mobile Web Specialist Certification Course (three Stage Course Material Project - Restaurant Reviews)_

### Table of Contents

* [Project Overview](#project-overview)
* [Live Version](#live-version)
* [Installation](#installation)
* [How to Use the App](#how-to-use-the-app)
* [Dependencies](#dependencies)

### Project Overview

The goal of the project was to convert a static site that lacks accesibility into a fully responsive site, to implement accessibility features for screen reader use and to add a ServiceWorker script to cache requests to all of the site's assets so that any page that has been visited by a user will be accessible when the user is offline.

We were provided with a [starter code](https://github.com/udacity/mws-restaurant-stage-1) to serve as our baseline to begin development.

### Live Version

Check out the live version of the project at https://vyel.github.io/FEND-Restaurant-Reviews-App/

### Installation

1. Clone or download this repository and cd into the project's directory
2. Start a simple HTTP server to serve up the website's files on your local computer:
	- Install [Python](https://www.python.org/downloads/) or check which version you are using by running `python -V`
	- If you have Python 2.x, start the server by running the command  `python -m SimpleHTTPServer 8000`. For Python 3.x, run the command `python3 -m http.server 8000`.
	- This app is set up to serve data from port 8000. If you already have something running on port 8000, change the port number in the `js/dbhelper.js` file,
		```
        static get DATABASE_URL() {
          const port = 8000;  // <-- change to your preferred port
          return `http://localhost:${port}/data/restaurants.json`;
        }
    	```
    	then run the server command followed by your chosen port number.
    - Note to myself:exclamation: Start up the server by running the command `py -m http.server 8000`.
3. Open the project in a browser of your choice at `localhost:8000`

### How to Use the App

* The app will display a map with markers for each restaurant, and a list of restaurants
* Restaurants list can be filtered by neighbourhood and/or cuisine
* Click on a map marker or restaurant's `View Details` button to view details and reviews about the restaurant

### Dependencies
* [Google Normalize.css](https://code.google.com/archive/p/normalize-css/)
* [Google Maps API](https://developers.google.com/maps/documentation/)

