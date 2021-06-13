// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    license = '';
  }
  return `![badmath](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    license = '';
  }
  return `https://choosealicense.com/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    license = '';
  }
  return `
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)
  

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions
  
  Hi my name is ${data.username} the developer behind ${data.title} !
  
  If you have any questions about the usage of this project of any suggestions on how to better this project please feel free to contact me at:

  ${data.email}
`;
}


module.exports = generateMarkdown;
