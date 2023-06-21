'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const resultObj = {};

  for (const param in robot) {
    if (resultObj[robot[param]]) {
      return null;
    }
    resultObj[robot[param]] = param;
  }

  return resultObj;
}

module.exports = inverseRobot;
