'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const value in robot) {
    if (inversed.hasOwnProperty(robot[value])) {
      return null;
    }
    inversed[robot[value]] = value;
  }

  return inversed;
}

module.exports = inverseRobot;
