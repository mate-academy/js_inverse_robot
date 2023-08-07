'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const invertedRobot = {};
  const valuesSeen = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (valuesSeen[value]) {
        return null;
      }

      invertedRobot[value] = key;
      valuesSeen[value] = true;
    }
  }

  return invertedRobot;
}

module.exports = inverseRobot;
