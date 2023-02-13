'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverdedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inverdedRobot.hasOwnProperty(value)) {
      return null;
    }

    inverdedRobot[value] = key;
  }

  return inverdedRobot;
}

module.exports = inverseRobot;
