import Validator from '../username';

test.each([
  ['!@#$%12', false],
  ['as_d23f-f', true],
  ['asdfgd12', false],
  ['12dsfasd', false],
  ['-adfafd', false],
  ['_sdfadf', false],
  ['qwerrr-', false],
  ['sdfadf_', false],
  ['asdff1234', false],
])('test Validator with username: %s', (username, expected) => {
  const result = Validator.validateUsername(username);
  expect(result).toBe(expected);
});
