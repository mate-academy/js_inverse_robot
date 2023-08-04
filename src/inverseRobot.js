'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInvers = {};

  for (const key in robot) {
    if (robotInvers[robot[key]]) {
      return null;
    }
    robotInvers[robot[key]] = key;
  }

  return robotInvers;
}

module.exports = inverseRobot;
