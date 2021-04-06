const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee.js')

test('checks employees name', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');
});

test('checks employees id', () => {
    const employee = new Employee('name', 6);

    expect(employee.id).toBe(6);
});

test('checks employees email', () => {
    const employee = new Employee('name', 6, 'testemail');
// console.table(employee)
    expect(employee.email).toEqual(expect.stringContaining('testemail'));
});

test("gets employee's name", () => {
    const employee = new Employee('name');

    expect(employee.getName()).toEqual(expect.stringContaining('name'))
});

test("gets employee's id", () => {
    const employee = new Employee('name', 'id');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()))
});

test("gets employee's email", () => {
    const employee = new Employee('email');

    expect(employee.getEmail()).toEqual(expect.stringContaining('email'))
})

test("gets employee's role", () => {
    const employee = new Employee('Employee');

    expect(employee.getRole()).toEqual('Employee')

})

