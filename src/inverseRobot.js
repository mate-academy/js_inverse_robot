'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultInverse = {};

  for (const key in robot) {
    const value = robot[key];
    const check = resultInverse.hasOwnProperty([value]);

    if (check) {
      return null;
    }

    resultInverse[value] = key;
  }

  return resultInverse;
}

module.exports = inverseRobot;
