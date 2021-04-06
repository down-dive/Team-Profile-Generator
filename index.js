const { listenerCount } = require('events');
const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site')
// const manager = require('./lib/Manager')
// let position = ''
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
        if (employee.confirmAddPositions) {
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
            })
        } else {
            console.log(array)

        }
    })
}

// const promptPositions = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'position',
//             message: 'What position would you like to fill up?',
//             choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter make a selection!');
//                     return false;
//                 }
//             }
//         },
//     ])
//     .then(positionData => {
//         position = positionData.position
//         return position;
//     })
// }

// promptPositions()
// // console.log(position)

// // const promptQuestions = () => {
// //     return inquirer.prompt([
// //         {
// //             type: 'input',
// //             name: `${position}`,
// //             message: 'What is the `${position}` name?',
// //             validate: nameInput => {
// //                 if (nameInput) {
// //                   return true;
// //                 } else {
// //                   console.log('Please enter the `${position}` name!');
// //                   return false;
// //                 }
// //               }
// //         },
// //     ])
// // }
// // promptQuestions()

// const promptEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the employees name?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the employees name!');
//                   return false;
//                 }
//               }
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is the employees id?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the employees id!');
//                   return false;
//                 }
//               }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is the employees email?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the employees email!');
//                   return false;
//                 }
//               }
//         }
//     ])
// }
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
        }
    ])
    .then(employee => {
        console.log(employee)
        array.push(employee);
        if (employee.confirmAddPositions) {
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
            })
        } else {
            return array
        }
    })
}
// const promptIntern = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the interns name?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the interns name!');
//                   return false;
//                 }
//               }
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is the interns id?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the interns id!');
//                   return false;
//                 }
//               }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is the interns email?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the interns email!');
//                   return false;
//                 }
//               }
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What is the interns school?',
//             validate: nameInput => {
//                 if (nameInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the interns school!');
//                   return false;
//                 }
//               }
//         }
//     ])
// }



const makeItWork = () => {
    promptManager().then((res) => {
        console.log(array)
    })

        // fs.writeFile('./dist/index.html', generatePage(res.name, res.id, res.email, res.officeNumber), err => {
        //     if (err) throw new Error(err);

// })
}
makeItWork();
// promptEmployee()
// .then(promptEngineer)
// .then(promptIntern)
// .then(promptManager)