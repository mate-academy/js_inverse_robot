'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swappedRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (swappedRobot.hasOwnProperty(value)) {

        return null;
      }

      swappedRobot[value] = key;
    }
  }

  return swappedRobot;
}

module.exports = inverseRobot;

