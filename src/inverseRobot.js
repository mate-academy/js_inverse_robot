'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const key in robot) {
    const value = robot[key];

    if (inversed[value] !== undefined) {
      return null;
    }

    inversed[value] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
