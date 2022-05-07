// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project. (Required)',
            },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
            },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
            },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can others contribute to your project?',
            },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you run tests?',
            },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license would you like to include?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
            },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          }
    ])
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README has been created.')
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {
        const userResponses = await promptUser();
        console.log("Your responses: ", userResponses);

        // Pass inquirer data and api data to markdown
        console.log("Generating your markdown")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        // Write markdown
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();
