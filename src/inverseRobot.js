'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const invRobot = {};

  for (const key in robot) {
    if (Object.hasOwnProperty.call(robot, key)) {
      const value = robot[key];

      if (invRobot.hasOwnProperty(value)) {
        return null;
      }

      invRobot[value] = key;
    }
  }

  return invRobot;
}

module.exports = inverseRobot;
