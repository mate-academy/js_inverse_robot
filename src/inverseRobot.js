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
  const allValue = Object.values(robot);
  let copyRobot = {};

  for (let i = 0; i < allValue.length; i++) {
    let count = 0;

    for (let value = 0; value < allValue.length; value++) {
      if (allValue[i] === allValue[value]) {
        count++;
      }
    }

    if (count > 1) {
      copyRobot = null;

      return copyRobot;
    }
  }

  Object.keys(robot).forEach(function(value) {
    const key = robot[value];

    copyRobot[key] = value;
  });

  return copyRobot;
}

module.exports = inverseRobot;
