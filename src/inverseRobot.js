'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const key in robot) {
    if (invRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    invRobot[robot[key]] = key;
  }

  return invRobot;
}

module.exports = inverseRobot;
