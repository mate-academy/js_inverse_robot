'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return Object.values(robot).length === Object.values(newRobot).length
    ? newRobot : null;
}

module.exports = inverseRobot;
