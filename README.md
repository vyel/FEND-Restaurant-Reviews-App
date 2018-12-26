# Restaurant Reviews App - Stage 1

Project 6 of the [Udacity Front-End Web Developer Nanodegree program](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001), _also part of Mobile Web Specialist Certification Course (three Stage Course Material Project - Restaurant Reviews)_

### Table of Contents

* [Project Overview](#project-overview)
* [Installation](#installation)
* [How to Use the App](#how-to-use-the-app)
* [Dependencies](#dependencies)
* [Contributing](#contributing)
* [License](#license)

### Project Overview

The goal of the project was to convert a static site that lacks accesibility into a fully responsive site, to implement accessibility features for screen reader use and to add a ServiceWorker script to cache requests to all of the site's assets so that any page that has been visited by a user will be accessible when the user is offline.

We were provided with a [started repository](https://github.com/udacity/mws-restaurant-stage-1) to serve as our baseline to begin development.

### Installation

1. Clone or download this repository
2. Open the command prompt
3. Navigate to the directory using the cd command
4. Enter the command to start up a server on port 8000 (see more details below)
5. Open your browser at the address `localhost:8000`

This app must be loaded using a local server. Start up a simple HTTP server to serve up the site files on your local computer. Python is a simple option for this. In a terminal, check to see if you have Python already installed by running `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`, or `py -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

This app is set up to serve data from port 8000. You can change the port number in the `js/dbhelper.js` file:

    static get DATABASE_URL() {
      const port = 8000;  // <-- change to your preferred port
      return `http://localhost:${port}/data/restaurants.json`;
    }

### How to Use the App

* The app will display a map with markers for each restaurant, and a list of restaurants
* Restaurants list can be filtered by neighbourhood and/or cuisine
* Click on a map marker or restaurant's `View Details` button to view details and reviews about the restaurant

### Dependencies
* [Google Normalize.css](https://code.google.com/archive/p/normalize-css/)
* [Google Maps API](https://developers.google.com/maps/documentation/)

### Contributing
This repository contains the files of the 6th project for [Udacity Front-End Web Developer Nanodegree Program](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) as they were submitted for review. Hence, pull requests will most likely not be accepted.

### License
None