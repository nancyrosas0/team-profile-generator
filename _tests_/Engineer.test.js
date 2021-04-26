const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer');

test('create an employee object', () => {
    const employee = new Engineer('name', 'id', 'email', 'link');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.link).toBe('link')
});