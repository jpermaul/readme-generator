const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require ('./utils/generateMarkdown')








inquirer.prompt([
    {
        type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      default: 'n/a',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a brief description of your project?',
      default: 'n/a',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a step-by-step description of how to get the development environment running.',
      default: 'n/a',
      
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
      default: 'n/a'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
      default: 'n/a',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions.',
      default: 'n/a',

    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github URL to your Github profile?.',
      default: 'n/a',

    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license type.',
      choices: ['MIT','Apache'],

    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      default: 'n/a',

    }
])
.then(response => fs.writeFileSync('./readMe.md', generateMarkdown(response) ))