'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  const robotKeys = Object.keys(robot);

  for (const key of robotKeys) {
    if (result[robot[key]] !== undefined) {
      return null;
    } else {
      result[robot[key]] = key;
    };
  }

  return result;
}

module.exports = inverseRobot;
