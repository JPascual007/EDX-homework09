// function to generate markdown for README

function generateMarkdown(answers) {
    return `# Project:
  ${answers.name}
  
  ## Table of Contents: 
  - [Name](#name)
  - [Description](#description)
  - [Installation Instructions](#installation)
  - [License](#license)
  - [Usage](#Usage)
  - [Contributors](#contributors)
  - [Test](#Tests)
  - [GitHub](#GitHub)
  - [Email](#Email)

  
  ## License:
  [![License:${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  
  ## Description:
  ${answers.description}
  
  ## Images:
  ![Project Screenshot](./imagePathHere.png)
  
  ![Project Screenshot](./imagePathHere.png)
  
  ![Project Screenshot](./imagePathHere.png)
  
  ## Installation Instructions: 
  ${answers.installation}
  
  ## Test Command: 
  To test type ${answers.test} into the terminal
  
  ## My Github Username: 
  Check out more project on my Github at https://github.com/${answers.gitHub}
  
  ## My Email Address:
  If you have any questions please feel free to email me at ${answers.email}
  
  ## Other Contributors:
  ${answers.contributors}
  `;
  }
  
  module.exports = generateMarkdown;