'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};

  for (const value in robot) {
    const key = robot[value];

    if (Object.prototype.hasOwnProperty.call(inversedRobot, key)) {
      return null;
    }
    inversedRobot[key] = value;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
