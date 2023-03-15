'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (invRobot.hasOwnProperty(value)) {
      return null;
    }

    invRobot[value] = key;
  }

  return invRobot;
}

module.exports = inverseRobot;
