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
    if (newObj[robot[key]]) {
      return null;
    }
    newObj[robot[key]] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
