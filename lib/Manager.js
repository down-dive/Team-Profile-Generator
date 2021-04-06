const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}


// const manager = new Manager("fred", 7, "email")
// console.table(manager)

module.exports = Manager;