'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const correctRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (correctRobot[value] !== undefined) {
      return null;
    }

    correctRobot[value] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
