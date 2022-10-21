'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arr = Object.entries(robot);
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i][1]] = arr[i][0];
  }

  if (Object.keys(robot).length !== Object.keys(result).length) {
    return null;
  }

  return result;
}
module.exports = inverseRobot;
