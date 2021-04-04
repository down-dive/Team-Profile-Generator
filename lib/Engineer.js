function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

}

Engineer.prototype.getName = function() {
    return `Empoyee's name is ${this.name}`;
};

Engineer.prototype.getId = function() {
    return `Empoyee's id is ${this.id}`;
};

Engineer.prototype.getEmail = function() {
    return `Empoyee's email is ${this.email}`;
};

Engineer.prototype.getRole = function() {
  return 'Engineer'
}

Engineer.prototype.getGithub = function() {
    return `Engineers github is ${this.github}`
}


// const Engineer = new Engineer("fred", 7, "email")
// console.table(engineer)

module.exports = Engineer;