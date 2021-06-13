// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        type: "list",
        message: "What license does your project use?",
        name: "license",
        choices: ["mit", "agpl", "mpl", "apache"],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'List GitHub usernames of anyone who contributed to this project, press ENTER if none',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Github email?'

    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

        console.log('Your ReadMe is complete!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("ReadMeGnrt.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();
