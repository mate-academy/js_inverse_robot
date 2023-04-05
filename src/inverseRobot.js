'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in newRobot) {
      return null;
    }

    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
