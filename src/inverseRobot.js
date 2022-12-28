'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const values in robot) {
    const newValue = robot[values];

    if (newRobot.hasOwnProperty(newValue)) {
      return null;
    }

    newRobot[newValue] = values;
  }

  return newRobot;
}

module.exports = inverseRobot;
