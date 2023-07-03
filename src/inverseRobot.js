'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (invertedRobot[value]) {
        return null;
      }

      invertedRobot[value] = key;
    }
  }

  return invertedRobot;
}

module.exports = inverseRobot;
