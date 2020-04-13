# Selenium Using Javascript
A sample javascript project for showcasing Selenium to automate browser testing

## Pre-requisites
* Firefox browser
* Node.js version 12.x or greater

## Running the tests
In the command-line: 

1. Use the command, `npm install` to install the dependencies. 
**Note:** This step is required only once to install the dependencies.

2. Use the command, `npm test` to run the tests 

## Structure
* Based on **Page Object Model**, the page objects and page functionality are put into the [respective pages](test/pages) for modularity
* Selenium related functionality are also seperated and put into [own directory](test/selenium)
* Splitting the page functionality and Selenium functionality makes the [tests](test) easier to read and understand

