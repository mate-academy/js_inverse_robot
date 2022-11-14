'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const val in robot) {
    newRobot[robot[val]] = val;
  }

  return Object.keys(newRobot).length < Object.keys(robot).length
    ? null : newRobot;
}

module.exports = inverseRobot;
