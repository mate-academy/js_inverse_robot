'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key of Object.keys(robot)) {
    const robotKeys = robot[key];

    if (result.hasOwnProperty(robotKeys)) {
      return null;
    } else {
      result[robotKeys] = key;
    }
  }

  return result;
}

module.exports = inverseRobot;
