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

  /* Мені здається, що в мене якийсь говнокод, прошу поясніть
    будь-ласка як це можна переробити через Object.hasOwnProperty,
     якщо так можна. Бо до мене ніяк не доходить */

  const res = {};

  for (const key in robot) {
    if (res[robot[key]]) {
      return null;
    } else {
      res[robot[key]] = key;
    }
  }

  // const arr = Object.keys(robot).concat(Object.values(robot));
  // const result = [];

  // for (const item of arr) {
  //   if (!result.includes(item)) {
  //     result.push(item);
  //   }
  // }

  // if (result.length !== arr.length) {
  //   return null;
  // }

  return res;
}

module.exports = inverseRobot;
