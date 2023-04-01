'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversObj = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (reversObj[value] !== undefined) {
        return null;
      }
      reversObj[value] = key;
    }
  }

  return reversObj;
}

module.exports = inverseRobot;
