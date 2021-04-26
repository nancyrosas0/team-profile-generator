const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});