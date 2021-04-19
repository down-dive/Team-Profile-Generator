const { listenerCount } = require('events');
const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site')

const array = []

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the managers name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers id?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the managers id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the managers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the managers office number?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the managers office number!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddPositions',
      message: 'Would you like to add another employee?',
      default: false
    }
  ])
    .then(employee => {
      const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
      array.push(manager);
      if(employee.confirmAddPositions == true){
        makeChoice(employee)
      } else (makeItWork())     
    })
}

const makeChoice = (e) => {
  if (e.confirmAddPositions) {
    inquirer.prompt([
      {
        type: 'list',
        name: 'employeeChoice',
        message: 'What position would you like to add?',
        choices: ['Engineer', 'Intern']
      }
    ])
      .then(res => {
        if (res.employeeChoice === 'Engineer') promptEngineer()
        else promptIntern();
      })
  } else {
    console.log(array)
  }
}

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineers name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the engineers name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineers id?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the engineers id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineers email?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the engineers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineers github?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the engineers github!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddPositions',
      message: 'Would you like to add another employee?',
      default: false
    }
  ])
    .then(employee => {
      const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github)
      array.push(engineer);
      if(employee.confirmAddPositions == true){
        makeChoice(employee)
      } else (makeItWork())
    })
}

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the interns name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the interns name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns id?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the interns id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the interns email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the interns school?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the interns school!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddPositions',
      message: 'Would you like to add another employee?',
      default: false
    }
  ])
    .then(employee => {
      const intern = new Intern(employee.name, employee.id, employee.email, employee.school)
      array.push(intern);
      if(employee.confirmAddPositions == true){
        makeChoice(employee)
      } else (makeItWork())     
    })
}

const makeItWork = () => {

  console.log(array)
  fs.writeFile('./dist/index.html', generatePage(array), err => {
    if (err) throw new Error(err);

  })


}
promptManager()
