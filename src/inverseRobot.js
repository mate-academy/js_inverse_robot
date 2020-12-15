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
  let res = {};
  const arrProperties = [];
  const arrValues = [];
  let count = 0;

  for (const key in robot) {
    arrProperties[count] = key;
    arrValues[count] = robot[key];

    count++;
  }

  const buffer = arrValues[0];

  for (let i = 1; i < arrValues.length; i++) {
    if (buffer === arrValues[i]) {
      res = null;
      break;
    }
  }

  if (res !== null) {
    for (let i = 0; i < arrProperties.length; i++) {
      const key = arrValues[i];
      const value = arrProperties[i];

      res[key] = value;
    }
  }

  return res;
}

module.exports = inverseRobot;
