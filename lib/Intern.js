function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

}

Intern.prototype.getName = function () {
    return `Interns name is ${this.name}`;
};

Intern.prototype.getId = function () {
    return `Interns id is ${this.id}`;
};

Intern.prototype.getEmail = function () {
    return `Interns email is ${this.email}`;
};

Intern.prototype.getSchool = function () {
    return `Interns school is ${this.school}`;
};

Intern.prototype.getRole = function () {
    return 'Intern'
}

module.exports = Intern;