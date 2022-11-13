'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    result[robot[key]] = key;
  }

  if (Object.keys(result).length < Object.values(robot).length) {
    return null;
  }

  return result;
}

module.exports = inverseRobot;
