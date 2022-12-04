'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const robotValues = robot[key];

    if (result.hasOwnProperty(robotValues)) {
      return null;
    }

    result[robotValues] = key;
  }

  return result;
}

module.exports = inverseRobot;
