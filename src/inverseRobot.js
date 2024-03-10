'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};
  const checkValue = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (checkValue[value]) {
        return null;
      }

      reversedRobot[value] = key;
      checkValue[value] = true;
    }
  }

  return reversedRobot;
}

module.exports = inverseRobot;
