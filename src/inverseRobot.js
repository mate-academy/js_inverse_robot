'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  let value;

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      value = robot[key];

      if (invertedRobot[value] !== undefined) {
        return null;
      }

      invertedRobot[value] = key;
    }
  }

  return invertedRobot;
}

module.exports = inverseRobot;
