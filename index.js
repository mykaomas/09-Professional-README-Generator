// Packages used
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a few sentences that describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List installation instructions (if none, type N/A):',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List all the steps needed to successfully use your application:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List the names of people you worked with to complete this project (if none, type N/A):',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license that was used with your project:',
        choices: ['MIT License', 'Apache License 2.0', 'GPL License', 'BSD License', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);

    fs.writeFileSync(fileName, readmeContent);

    console.log('README.md generated successfully.');
}

// Initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('GenerateREADME.md', answers);
        })
        .catch((error) => {
            console.error('Error during initialization:', error);
        });
}

// Function call to initialize app
init();
