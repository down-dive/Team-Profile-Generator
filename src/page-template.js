
   const manager = require('../lib/manager.js')
   const engineer = require('../lib/engineer.js')
   const intern = require('../lib/intern.js')
 
    const generateTeam = team => {
        // create the manager html
        const generateManager = manager => {
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
            `;
        };
        // create the html for engineers
        const generateEngineer = engineer => {
            return `
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
            `;
        };
        // create the html for interns
        const generateIntern = intern => {
            return `
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
            `;
        };
        const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        );
        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
            .join("")
        );
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
            .join("")
        );
        return html.join("");
    }

    module.exports = team => {
    

        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Portfolio Demo</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link rel="stylesheet" href="style.css">
        </head>
        
        <body>
          <header>
            <div class="container flex-row justify-space-between align-center py-3">
              <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
              <nav class="flex-row">
                <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
              </nav>
            </div>
          </header>
          <main class="container my-5">
            ${generateTeam(team)}

          </main>
          <footer class="container text-center py-3">
            <h3 class="text-dark">&copy;2021 by Yevgeniya Terlyuk</h3>
          </footer>
        </body>
        </html>
        `;
    }