'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const value in robot) {
    const key = robot[value];

    if (key in fixedRobot) {
      return null;
    }

    fixedRobot[key] = value;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
