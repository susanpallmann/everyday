# everyday
**Concept:** Susan Pallmann and Josh Ahlers

**Execution** (Research, Design, & Development)**:** Susan Pallmann

**Version:** 4

**Prototype URL:** https://susanpallmann.github.io/everyday-react/

## Contents

## Overview
Sometimes moods can seem unpredictable when really there is an underlying cause behind it. EveryDay is a web-app prototype designed to let users record their moods and daily behaviors. The hope is that tracking this data will let users notice patterns in how their behavior or habits affect their moods, and lead to better days overall.

## Resources Used
This web app is hosted on [GitHub Pages](https://pages.github.com/). Authentication and realtime database capabilities are powered by [Google Firebase](https://firebase.google.com/). UI elements are created using [React JS](https://reactjs.org/). The [online Babel compiler resource](https://babeljs.io/) was used to translate code written in jsx to js. Iconography is from [Google's Material library](https://material.io/), and fonts are from [Google Fonts](https://fonts.google.com/). The responsive grid system in place is pulled from my [Discount Bootstrap](https://github.com/susanpallmann/discount-bootstrap) project.

## Process
### Exploring the Problem Space
#### Personal exploration
Originally a personal experiment, this project began as an Excel spreadsheet. For a few months, I kept track of a number of daily variables (amount of sleep, weather, perceived productivity), and my overall mood for that day.

Through this experiment, I was surprised to find:

* My moods in any given day were often well-explained by the other variables I had recorded for that day

* I had a good day a vast majority of the time (80% of days were marked as "good" or "great")

Both of these discoveries were a surprise to me - I had generally believed myself to be a pretty negative person, and felt often that my moods were out of my control. By seeing the data, I was able to be more proactive in taking care of my mental wellbeing.

After the experiment, I wondered if other people might benefit in similar ways from this type of data about themselves.

#### User Interviews
To answer some of these questions for the larger target audience and validate some assumptions made, a round of user interviews was conducted to talk about the base concept. In general, these interviews sought to:

* Verify that an app makes sense as the way for people to track this information

* Learn what users think affects their mood already

* Learn what users would use this app for if it existed

* Learn what behaviors users would like to be able to track

* Ensure that this app is flexible for a variety of lifestyles

* Learn what barriers might prevent people from logging their mood and habits already

### Initial Design
#### Material Design
With this added information, work on the design could begin. The general theme of the app borrows several concepts and assets from Google's Material design system. Specifically, the app makes use of Material's conception of depth and use of shadows to portray elevation. All iconography used in the app if from Google's Material Icons Rounded library.

#### Dark Mode Default
One design choice that will certainly stand out is the fact that dark mode is the default theme. In the interviews, nearly all users said that they would be most likely to log their day in the evening, after dinner. The dark interface is less likely to be hard on the eyes in dark settings. There will eventually be a light theme as well.

#### Minimal Interaction
One of the common concerns brought up by users in the initial interviews was that logging information daily can become a chore, or too tedious to become a habit. To combat this, the daily logging forms are designed to be able to be completed in as few interactions as possible.

### User Testing
* Proof of some assumptions
* New thoughts and problems

### Redesign

### Development
* Why React?
* Flow Chart
* Diagraming States
