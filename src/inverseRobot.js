'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const expectedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (expectedRobot[value] !== undefined) {
      return null;
    }

    expectedRobot[value] = key;
  }

  return expectedRobot;
}

module.exports = inverseRobot;
