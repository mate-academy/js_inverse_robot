'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverseObj = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverseObj[value]) {
      return null;
    }

    inverseObj[value] = key;
  }

  return inverseObj;
}

module.exports = inverseRobot;
