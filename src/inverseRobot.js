'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (reversedRobot.hasOwnProperty(value)) {
        return null;
      }
      reversedRobot[value] = key;
    }
  }

  return reversedRobot;
}

module.exports = inverseRobot;
