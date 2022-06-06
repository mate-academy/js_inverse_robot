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
  let count = 0;
  const robValues = Object.values(robot).reverse();
  const robKeys = Object.keys(robot).reverse();
  const obj = {};

  for (let i = 0; i < robValues.length; i++) {
    for (let j = i + 1; j < robValues.length; j++) {
      if (robValues[i] === robValues[j]) {
        count++;
      }
    }
  }

  if (count > 0) {
    return null;
  }

  for (let i = 0; i < robKeys.length; i++) {
    obj[robValues[i]] = robKeys[i];
  }

  return obj;
}

module.exports = inverseRobot;
