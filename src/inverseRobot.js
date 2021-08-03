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
  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);
  const reversedRobot = {};

  for (let i = 0; i < robotValues.length; i++) {
    for (let y = 0; y < robotValues.length; y++) {
      if (i !== y) {
        if (robotValues[i] === robotValues[y]) {
          return null;
        }
      }
    }
  }

  for (let i = 0; i < robotKeys.length; i++) {
    reversedRobot[robotValues[i]] = robotKeys[i];
  }

  return reversedRobot;
}

module.exports = inverseRobot;
