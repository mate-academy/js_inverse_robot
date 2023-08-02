'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const newValue = robot[key];

    if (newRobot.hasOwnProperty(newValue)) {
      return null;
    }

    newRobot[newValue] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
