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
  const result = {};
  const keys = Object.values(robot);
  const values = Object.keys(robot);

  for (let a = 0; a < keys.length; a++) {
    const firstKey = keys.shift();
    const firstValue = values.shift();

    if (keys.includes(firstKey)) {
      return null;
    } else if (values.includes(firstValue)) {
      return null;
    }

    keys.push(firstKey);
    values.push(firstValue);
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];

    result[key] = value;
  }

  return result;
}

module.exports = inverseRobot;
