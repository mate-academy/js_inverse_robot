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
  const realValues = Object.keys(robot);
  const realKeys = Object.values(robot);

  for (let i = 0; i < realKeys.length - 1; i++) {
    for (let j = i + 1; j < realKeys.length; j++) {
      if (realKeys[i] === realKeys[j]) {
        return null;
      }
    }
  }

  const invertedRobot = {};

  for (let i = 0; i < realKeys.length; i++) {
    invertedRobot[realKeys[i]] = realValues[i];
  }

  return invertedRobot;
}

module.exports = inverseRobot;
