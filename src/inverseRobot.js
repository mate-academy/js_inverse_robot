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
  const values = Object.values(robot);

  // checking repeating values

  for (const value of values) {
    let counter = 0;

    for (const i of values) {
      if (i === value) {
        counter++;
      }

      if (counter > 1) {
        return null;
      }
    }
  }

  // swap keys and values

  const robotProperties = Object.entries(robot);

  const invertedRobot = {};

  for (let i = 0; i < robotProperties.length; i++) {
    invertedRobot[robotProperties[i][1]] = robotProperties[i][0];
  }

  return invertedRobot;
}

module.exports = inverseRobot;
