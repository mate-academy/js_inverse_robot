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
  const keysArray = Object.values(robot);

  for (let i = 1; i < keysArray.length; i++) {
    if (keysArray[i - 1] === keysArray[i]) {
      return null;
    }
  }

  const valuesArray = Object.keys(robot);

  for (let i = 0; i < valuesArray.length; i++) {
    for (let j = i + 1; j < valuesArray.length; j++) {
      if (robot[valuesArray[i]] === robot[valuesArray[j]]) {
        return null;
      }
    }
  }

  const invertedRobot = {};

  for (const [keys, values] of Object.entries(robot)) {
    invertedRobot[values] = keys;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
