'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotCopy = {};

  for (const a in robot) {
    if (robotCopy[robot[a]] === undefined) {
      robotCopy[robot[a]] = a;
    } else {
      return null;
    }
  }

  return robotCopy;
}

module.exports = inverseRobot;
