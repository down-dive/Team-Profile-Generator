function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

}

const employee = new Employee("fred", 7, "email")
console.table(employee)

module.exports = Employee;