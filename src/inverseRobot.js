'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const expectRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (expectRobot[value] !== undefined) {
      return null;
    }

    expectRobot[value] = key;
  }

  return expectRobot;
}

module.exports = inverseRobot;
