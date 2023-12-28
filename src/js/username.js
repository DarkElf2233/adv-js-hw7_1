/* eslint-disable no-useless-escape */
export default class Validator {
  static validateUsername(username) {
    const regex = [
      /[^a-zA-Z\-_\d]+/, // acceptable symbols
      /d\{4,}/, // more than 3 numbers in row
      /^[\-_\d]/, // check numbers at the start
      /[\-_\d]$/, // in the end
    ];
    for (const re of regex) {
      if (username.match(re)) {
        return false;
      }
    }
    return true;
  }
}
