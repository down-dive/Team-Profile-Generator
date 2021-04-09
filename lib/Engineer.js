const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer'
    }

    getGithub() {
        return `${this.github}`
    }
}


// const Engineer = new Engineer("fred", 7, "email")
// console.table(engineer)

module.exports = Engineer;