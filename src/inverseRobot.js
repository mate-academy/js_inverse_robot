'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedResult = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (inversedResult.hasOwnProperty(value)) {
        return null;
      }

      inversedResult[value] = key;
    }
  }

  return inversedResult;
}

module.exports = inverseRobot;
