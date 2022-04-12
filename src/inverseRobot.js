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
  const invertRobot = {};
  const dublicateCheck = [];

  for (const key in robot) {
    invertRobot[robot[key]] = key;
    dublicateCheck.push(robot[key]);

    const indexOfMatch = dublicateCheck.indexOf(robot[key]);

    if (dublicateCheck.includes(robot[key], indexOfMatch + 1)) {
      return null;
    }
  }

  return invertRobot;
}

module.exports = inverseRobot;
