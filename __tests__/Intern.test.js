const { test, expect } = require('@jest/globals')
const Intern = require('../lib/intern.js')

test('checks interns name', () => {
    const intern = new Intern('name');

    expect(intern.name).toBe('name');
});

test('checks interns id', () => {
    const intern = new Intern('name', 6);

    expect(intern.id).toBe(6);
});

test('checks interns email', () => {
    const intern = new Intern('name', 6, 'testemail');
// console.table(intern)
    expect(intern.email).toBe('testemail');
});

test('checks interns school', () => {
    const intern = new Intern('name', 6, 'testemail', 'school');
// console.table(intern)
    expect(intern.school).toBe('school');
});

test("gets intern's name", () => {
    const intern = new Intern('name');

    expect(intern.getName()).toEqual(expect.stringContaining('name'))
});

test("gets intern's id", () => {
    const intern = new Intern('name', 'id');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()))
});

test("gets intern's role", () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toEqual('Intern')

})

