const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site')

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your employees name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your employees name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employees id?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your employees id!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employees email?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your employees email!');
                  return false;
                }
              }
        }
    ])
}
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineers name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your engineers name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers id?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your engineers id!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your engineers email!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers github?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your engineers github!');
                  return false;
                }
              }
        }
    ])
}
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your interns name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your interns name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns id?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your interns id!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns email?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your interns email!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your interns school?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your interns school!');
                  return false;
                }
              }
        }
    ])
}
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your managers name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your managers id?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your managers id!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers email?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your managers email!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your managers office number?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your managers office number!');
                  return false;
                }
              }
        }
    ])
}

promptEmployee()
promptEngineer()
promptIntern()
promptManager()