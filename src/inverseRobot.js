'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (inversedRobot[value] !== undefined) {
        return null;
      }

      inversedRobot[value] = key;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
