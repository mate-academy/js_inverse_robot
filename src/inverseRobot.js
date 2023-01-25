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

  if (Object.keys(result).length !== Object.keys(robot).length) {
    return null;
  } else {
    return result;
  }
}

module.exports = inverseRobot;
