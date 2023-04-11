'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObj = {};

  for (const key in robot) {
    if (robot[key] in newObj) {
      return null;
    }
    newObj[robot[key]] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
