'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const value in robot) {
    const invValue = robot[value];
    const invName = value;

    if (invRobot[invValue]) {
      return null;
    }

    invRobot[invValue] = invName;
  }

  return invRobot;
}

module.exports = inverseRobot;
