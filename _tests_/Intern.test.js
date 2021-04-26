const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern');

test('create an employee object', () => {
    const employee = new Intern('name', 'id', 'email', 'school');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.school).toBe('school')
});