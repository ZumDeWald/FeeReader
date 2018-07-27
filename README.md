# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

# Feed Reader Project

* This Feed Reader was created by Udacity for testing purposes. It includes the Jasmine testing framework to perform automated testing.

* The Feed Reader itself uses a Google API to fetch feeds and then displays them.

* Jasmine works to ensure the Reader will properly fetch, display, and change the content.


## Running this app

&nbsp; To load this application simply download the materials in this repo, then run the `index.html` file in the main directory. This file includes the SpecRunner information from the Jasmine Framework.


## Jasmine Specs

&nbsp; In this code Jasmine is testing for:

* The existence of the array containing feeds
* That the feeds have a valid URL and Name
* The `Menu` is hidden by default
* The `Menu` shows/hides properly with user action
* The feeds are properly collected from the Google API
* The app display changes when a user selects a different feed


## Dependencies

&nbsp; This app relies on:
* Google Feed Reader API
* jQuery
* Jasmine Framework
* Handlebars Templating


## More information:

[Udacity Front End NanoDegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)
