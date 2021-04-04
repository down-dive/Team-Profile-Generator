function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;

}

Manager.prototype.getName = function() {
    return `Empoyee's name is ${this.name}`;
};

Manager.prototype.getId = function() {
    return `Empoyee's id is ${this.id}`;
};

Manager.prototype.getEmail = function() {
    return `Empoyee's email is ${this.email}`;
};

Manager.prototype.getRole = function() {
  return 'Manager'
}


// const manager = new Manager("fred", 7, "email")
// console.table(manager)

module.exports = Manager;