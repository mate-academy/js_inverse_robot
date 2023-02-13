'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobor = {};

  for (const key in robot) {
    if (correctRobor.hasOwnProperty(robot[key])) {
      return null;
    }

    correctRobor[robot[key]] = key;
  }

  return correctRobor;
}

module.exports = inverseRobot;
