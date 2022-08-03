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
  const arr = [];
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    for (let k = 0; k < i; k++) {
      if (values[i] === values[k]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    if (robot[key]) {
      arr.push([robot[key], key]);
    }
  }

  const newRobot = Object.fromEntries(arr);

  return newRobot;
}

module.exports = inverseRobot;
