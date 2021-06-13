// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    license = [];
  }
  return `![badmath](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    license = [];
  }
  return `https://choosealicense.com/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    license = [];
  }
  return `# License 
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  #Description

  ${data.description}

  #Installation

  ${data.install}

  #Usage

  ${data.usage}

  #License

  ${renderLicenseSection(data.license)}
  
  #Contributing

  ${data.contribute}

  #Questions
  
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
