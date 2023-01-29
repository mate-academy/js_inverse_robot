'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inveredRobot = {};

  for (const key in robot) {
    if (!inveredRobot[robot[key]]) {
      inveredRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inveredRobot;
}

module.exports = inverseRobot;
