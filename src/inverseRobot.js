'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const repair = {};

  for (const key in robot) {
    if (repair[robot[key]]) {
      return null;
    }
    repair[robot[key]] = key;
  }

  return repair;
}

module.exports = inverseRobot;
