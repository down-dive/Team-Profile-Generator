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

test('checks emplpyees email', () => {
    const employee = new Employee('name', 6, 'testemail');
console.table(employee)
    expect(employee.email).toBe('testemail');
})
