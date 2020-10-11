# everyday-react
Concept: Susan Pallmann and Josh Ahlers

Execution (Design & Development): Susan Pallmann

## Contents

## Overview
Sometimes moods can seem unpredictable when really there is an underlying cause behind it. EveryDay is an app concept designed to let users record their moods and daily behaviors. The hope is that tracking this data will let users notice patterns in how their behavior or habits affect their moods, and lead to better days overall.

## Resources Used
This web app is hosted on [GitHub Pages](https://pages.github.com/). Authentication and realtime database capabilities are powered by [Google Firebase](https://firebase.google.com/). UI elements are created using a combination of pure JavaScript/[jQuery](https://jquery.com/) and [React JS](https://reactjs.org/) methods. The [online Babel compiler resource](https://babeljs.io/) was used to translate code written in jsx to js. Iconography is from [Google's Material library](https://material.io/), and fonts are from [Google Fonts](https://fonts.google.com/). The responsive grid system in place is pulled from my [Discount Bootstrap](https://github.com/susanpallmann/discount-bootstrap) project.

## Files

* **app-uncompiled.js** - jsx verion of app.js, for development purposes only
* **app.js** - js compiled version of app-uncompiled.js, production version
* **authentication.js** - functions used in authentication (except for when checking if user is logged in to access certain database paths)
* **categories.js** - js file containing objects representing the different types of categories the user can track using this app (rather than saving all of this to the database)
* **discount-bootstrap.css** - responsive grid system
* **discount-bootstrap.js** - minor re-usable ui elements
* **firebase-scripts.js** - js file containing all database interaction
* **vanilla.js** - pure js/jQuery, some non-React UI elements
* **index.html** - initial page HTML, modified by React UI elements
* **no-script.css** - in case of scripts not working
* **styles.css** - overall styling and design

## To Do Log

1. Probably going to refactor firebase-scripts.js, app.js, and vanilla.js separation to make more sense
