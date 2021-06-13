// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
    },
    ]


    // TODO: Create a function to write README file
    function writeToFile(fileName, data) { }

    // TODO: Create a function to initialize app
    function init() {
        // use inquirer to ask questions (activity 2)
        // call generateMarkdown function which will return a string
        // call writeToFile function pass to it a file name and the string returned by the generateMarkdown function
    }

    // Function call to initialize app
    init();
