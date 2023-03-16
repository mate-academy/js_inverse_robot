'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in inversedRobot) {
      return null;
    }

    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
