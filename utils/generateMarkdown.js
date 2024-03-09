
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title} 

  ![](https://img.shields.io/badge/${data.license}-license-yellow)
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  
  
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  This application is covered under the ${data.license} license.
  
  ## Questions

  For additional questions you can reach me at the following:
  ${data.github}
  ${data.email}

  ## Tests

  ${data.tests}
  
  
  
  

`;
}

module.exports = generateMarkdown;
