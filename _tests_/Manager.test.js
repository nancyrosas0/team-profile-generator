const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager');

test('create an employee object', () => {
    const employee = new Manager('name', 'id', 'email', 'officeNumber');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.email).toBe('officeNumber');
});