'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const invRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (invRobot.hasOwnProperty(value)) {
      return null;
    }

    invRobot[value] = key;
  }

  return invRobot;
}

module.exports = inverseRobot;
