'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverse = {};

  for (const key in robot) {
    const keyValue = robot[key];

    if (keyValue in robotInverse) {
      return null;
    }
    robotInverse[keyValue] = key;
  }

  return robotInverse;
}

module.exports = inverseRobot;
