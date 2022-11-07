'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const resKey = robot[key];

    if (result.hasOwnProperty(resKey)) {
      return null;
    }
    result[resKey] = key;
  }

  return result;
}

module.exports = inverseRobot;
