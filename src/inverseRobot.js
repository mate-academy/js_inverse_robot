'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const inverseKey = robot[key];
    const inverseValue = key;

    if (result.hasOwnProperty(inverseKey)) {
      return null;
    }

    result[inverseKey] = inverseValue;
  }

  return result;
}

module.exports = inverseRobot;
