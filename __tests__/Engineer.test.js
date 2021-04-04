const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/engineer.js')

test('checks engineers name', () => {
    const engineer = new Engineer('name');

    expect(engineer.name).toBe('name');
});

test('checks engineers id', () => {
    const engineer = new Engineer('name', 6);

    expect(engineer.id).toBe(6);
});

test('checks engineers email', () => {
    const engineer = new Engineer('name', 6, 'testemail');
// console.table(engineer)
    expect(engineer.email).toBe('testemail');
});

test('checks engineers github', () => {
    const engineer = new Engineer('name', 6, 'testemail', 'github');

    expect(engineer.github).toBe('github');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('name');

    expect(engineer.getName()).toEqual(expect.stringContaining('name'))
});

test("gets engineer's id", () => {
    const engineer = new Engineer('name', 'id');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()))
});

test("gets engineer's email", () => {
    const engineer = new Engineer('email');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('email'))
})

test("gets engineer's role", () => {
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toEqual('Engineer')

})

test("gets engineers github", () => {
    const engineer = new Engineer('github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('github'))

})