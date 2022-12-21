const inq = require('inquirer');
const fs = require('fs');

// ask the user a series of questions about markdown doc
inq.prompt([
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'please write a short description of your project',
        name: 'description'
    },
    {
        type: 'list',
        message: 'what kind of license does your project have?',
        choices: ['MIT', 'apache 2.0', 'IBM'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email'
    }, 
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'GitHub'
    }, 
]).then(function (answers) {
    // turn those questions into markdown format
    const projectTitle = answers.title;
    const projectDescription = answers.description;
    const projectLicense = answers.license
    const email= answers.email
    const GitHub = answers.GitHub
    // console.log(userFaveColor);

    const markdownContent = `
#  ${projectTitle}
## Description
 ${projectDescription}
## license
${projectLicense}
## Installation
to use this repo clone it, open it in vs code, open your terminal
 
## contact me
${email}
https://github.com/${GitHub}


`


    // create a markdown document
    fs.writeFile('ReadMe.md', markdownContent, function() {
        console.log('file was written');
    })

})