// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email address',
        },
        {
            type: 'input',
            name: 'project',
            message: 'please enter the name of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'please enter a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'please enter any special installations needed',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'please enter the usage for this project',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'please enter any contributions',
        },
        {
            type: 'input',
            name: 'test',
            message: 'please enter any test instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'please select which license you would like to use',
            choices: ['MIT', 'Mozilla Public License 2.0', 'Apache License 2.0']
        },

    ]);
};
console.log(questions);

const renderLicenseBadge = (license) => {
    switch (license) {
        case 'MIT':
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        default:
            return ''
    }
}
const renderLicenseLink = (license) => {
    switch (license) {
        case 'MIT':
            return '(https://opensource.org/licenses/MIT)'
        case 'Mozilla Public License 2.0':
            return '(https://opensource.org/licenses/MPL-2.0)'
        case 'Apache License 2.0':
            return '(https://opensource.org/licenses/Apache-2.0)'
        default:
            return ''
    }
}




// function to write README file

const generateMarkdown = ({ username, email, project, description, installation, usage, contribution, test, license }) =>
    `# <${project}>
## License
${renderLicenseBadge(license)}
## Description
 ${description}
 ## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Questions](#questions)
 ## Installation
 ${installation}
 ## Usage
 ${usage}
 ## Credits
 List any external resources.
 ## How to Contribute
 ${contribution}
 ## Tests
 ${test}
 ## Links
 ${renderLicenseLink(license)}
 
 ## Questions
 Please contact me with any questions:
  - GitHub: [${username}](https://github.com/${username})
  - Email: ${email}
 
 `

//function to initialize app

const start = () => {
    questions()
        .then((answers) => fs.writeFileSync('newreadme.md', generateMarkdown(answers)))
        .then(() => console.log('your readme is finished'))
        .catch((err) => console.log(err));
};

// Function call to initialize app
start();