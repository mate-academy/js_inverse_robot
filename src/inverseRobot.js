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
  let newRobot = {};
  const values = Object.keys(robot);
  const keys = Object.values(robot);

  for (let x = 0; x < keys.length - 1; x++) {
    let j = 1;

    if (x > 0) {
      j += x;
    }

    for (j; j < keys.length; j++) {
      if (keys[x] !== keys[j]) {
        continue;
      }
      newRobot = null;

      return newRobot;
    }
  }

  for (let i = 0; i < keys.length; i++) {
    newRobot[keys[i]] = values[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
