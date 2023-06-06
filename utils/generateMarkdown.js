// function to generate markdown for README

function generateMarkdown(answers) {
    return `# Project: ${answers.name}
  
  ## Description:
  ${answers.description}

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

  ## Installation Instructions: 
  ${answers.installation}

  ## License:
  [![License:${answers.License}](https://img.shields.io/badge/License-${answers.License}-yellow.svg)](https://opensource.org/licenses/${answers.License})
  
  ## Usage:
  ${answers.Usage}

  ## Images:
  ![Project Screenshot(./imagePathHere.png)(alt Text)]
  
  ![Project Screenshot(./imagePathHere.png)(alt Text)]
  
  ![Project Screenshot(./imagePathHere.png)(alt Text)]
  
  ## Other Contributors:
  ${answers.Contributors}
  
  ## Test Command: 
  To test type ${answers.Tests} into the terminal
  
  ## My Github Username: 
  Check out more project on my Github at https://github.com/${answers.GitHub}
  
  ## My Email Address:
  If you have any questions please feel free to email me at ${answers.Email}
  `;
  }
  
  module.exports = generateMarkdown;