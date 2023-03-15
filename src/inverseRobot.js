'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (reversedRobot[value] !== undefined) {
      return null;
    }
    reversedRobot[value] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
