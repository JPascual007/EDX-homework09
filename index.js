// Import External Data
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for the User
const questions = [
        {
            type: 'input',
            name: 'name',
            message: "What is your project's name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project.',
        },    
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step by step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'Usage',
            message: "Give a description of how to use the project."
        },
        {
            type: 'list',
            name: 'License',
            message: 'Apply the License Badge',
            choices: [
                'GPL General Public License',
                'MiT License',
                'Apache License 2.0',
            ]
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Provide information and instructions to the individuals who want to contribute to this project.',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Give a description of the steps that is needed to follow, in order to run tests or verify the functionality of the project/software.',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your Email address?',
        }
    ];

// Function to generate README
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(
            "Example_README.md", generateMarkdown({...answers,})
        )
    });
}

// Function to Write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// Initializes the program
init();