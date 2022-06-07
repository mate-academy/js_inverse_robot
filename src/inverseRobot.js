'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became values,
 * and values became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with values.
 *
 * If any of the object values are repeated, return 'null'.
 *
 * Example:
 *
 * const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  // write code here
  const arrayValue = Object.keys(robot);
  const arrayKey = Object.values(robot);
  const result = {};

  // for (let i = 0; i < value.length; i++) {
  //   if (result.hasOwnProperty(key[i])) {
  //     return null;
  //   }

  for (const char in arrayValue) {
    if (result.hasOwnProperty(arrayKey[char])) {
      return null;
    }
    result[arrayKey[char]] = arrayValue[char];
  }

  return result;
}

module.exports = inverseRobot;
