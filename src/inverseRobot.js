'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const value in robot) {
    const keys = robot[value];

    if (Object.keys(newRobot).includes(keys)) {
      return null;
    }

    newRobot[keys] = value;
  }

  return newRobot;
}

module.exports = inverseRobot;
