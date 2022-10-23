'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverse = {};

  for (const key in robot) {
    if (robotInverse.hasOwnProperty(robot[key])) {
      return null;
    }

    robotInverse[robot[key]] = key;
  }

  return robotInverse;
}

module.exports = inverseRobot;
