// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project? (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your project do?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How is your project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'List GitHub usernames of anyone who contributed to this project',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?'
    },
    ])
}


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
