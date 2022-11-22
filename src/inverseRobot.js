'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverse = {};

  for (const key in robot) {
    const name = robot[key];

    if (robotInverse.hasOwnProperty(name)) {
      return null;
    }

    robotInverse[name] = key;
  }

  return robotInverse;
}

module.exports = inverseRobot;
