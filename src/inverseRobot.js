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
  const keys = Object.keys(robot);
  const values = Object.values(robot);
  const result = {};

  function matches(arr) {
    for (const val of arr) {
      for (const val1 of arr) {
        return val === val1 && arr.indexOf(val) !== arr.lastIndexOf(val1);
      }
    }
  }

  if (matches(keys) || matches(values)) {
    return null;
  }

  for (let i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }

  return result;
}

module.exports = inverseRobot;
