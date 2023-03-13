'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverse = {};

  for (const key in robot) {
    const value = robot[key];

    if (robotInverse[value]) {
      return null;
    }

    robotInverse[value] = key;
  }

  return robotInverse;
}

module.exports = inverseRobot;
