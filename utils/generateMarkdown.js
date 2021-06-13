// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!data.license) {
    data.license = [];
  }
  return `https://img.shields.io/badge/license-${data.license}-green`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!data.license) {
    data.license = [];
  }
  return `https://choosealicense.com/licenses/${data.license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license) {
    data.license = [];
  }
  return `# License 
  ${renderLicenseLink(data.license)}
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
  ${renderLicenseLink(data.license)}
  
  #Contributing
  ${data.contribute}

  #Questions
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
