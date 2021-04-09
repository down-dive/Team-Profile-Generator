const { test, expect } = require('@jest/globals')
const Manager = require('../lib/manager.js')

test('checks managers name', () => {
    const manager = new Manager('name');

    expect(manager.name).toBe('name');
});

test('checks managers id', () => {
    const manager = new Manager('name', 6);

    expect(manager.id).toBe(6);
});

test('checks managers email', () => {
    const manager = new Manager('name', 6, 'testemail');
// console.table(manager)
    expect(manager.email).toBe('testemail');
});
test('checks managers office number', () => {
    const manager = new Manager('name', 6, 'testemail', 5);
    expect(manager.officeNumber).toBe(5);
});

test("gets manager's name", () => {
    const manager = new Manager('name');

    expect(manager.getName()).toEqual(expect.stringContaining('name'))
});

test("gets manager's id", () => {
    const manager = new Manager('name', 'id');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()))
});

test("gets manager's role", () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toEqual('Manager')

})

