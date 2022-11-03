'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotCopy = {};

  for (const key in robot) {
    if (robotCopy.hasOwnProperty(robot[key])) {
      return null;
    }
    robotCopy[robot[key]] = key;
  }

  return robotCopy;
}
module.exports = inverseRobot;
