'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotCopy = {};

  for (const key in robot) {
    const rightKey = robot[key];

    if (robotCopy.hasOwnProperty(rightKey)) {
      return null;
    }

    robotCopy[rightKey] = key;
  }

  return robotCopy;
}

module.exports = inverseRobot;
