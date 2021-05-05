const Manager = require('../lib/Manager');

const manager = new Manager('Emma', 1, 'emmagollan33@gmail.com', '(123)456-789');

test('Check to see if manager created successfully', () => {

  expect(manager).toEqual(expect.any(Manager));
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));

});