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
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 *
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  let robotNew = {};

  for (const key in robot) {
    robotNew[robot[key]] = key;
  }

  const robotValue = Object.values(robot);

  for (let i = 0; i <= robotValue.length; i++) {
    for (let j = i + 1; j <= robotValue.length - 1; j++) {
      if (robotValue[i] === robotValue[j]) {
        robotNew = null;
      }
    }
  }

  return robotNew;
}

module.exports = inverseRobot;
