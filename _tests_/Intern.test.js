const Intern = require('../lib/Intern');

const intern = new Intern('Emma', 3, 'emmagollan33@gmail,com', 'UCF');

test('Check to see if intern created successfully', () => {

  expect(intern).toEqual(expect.any(Intern));
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getSchool()).toEqual(intern.school);

});