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
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Explain what your project does.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do I install your project!',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'In what ways is your project used?',
    },
    {
        type: "list",
        message: "What license does your project use?",
        name: "license",
        choices: ["mit", "agpl-3.0", "mpl-2.0", "apache-2.0",],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'List GitHub usernames of anyone who contributed to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would I test your application?'
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

        console.log('Your ReadMe is complete, please view it under ReadMeGnrt!')
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
