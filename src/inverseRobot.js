'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in reverseRobot) {
      return null;
    }
    reverseRobot[value] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
