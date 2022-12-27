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
    const newKey = robot[key];

    if (newKey in inversedRobot) {
      return null;
    }
    inversedRobot[newKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
