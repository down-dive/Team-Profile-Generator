function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

}

Employee.prototype.getName = function() {
    return `Empoyee's name is ${this.name}`;
};

Employee.prototype.getId = function() {
    return `Empoyee's id is ${this.id}`;
};

Employee.prototype.getEmail = function() {
    return `Empoyee's email is ${this.email}`;
};

Employee.prototype.getRole = function() {
  return 'Employee'
}


// const employee = new Employee("fred", 7, "email")
// console.table(employee)

module.exports = Employee;