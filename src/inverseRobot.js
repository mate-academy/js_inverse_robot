'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverdedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverdedRobot.hasOwnProperty(value)) {
      return null;
    }

    inverdedRobot[value] = key;
  }

  return inverdedRobot;
}

module.exports = inverseRobot;
