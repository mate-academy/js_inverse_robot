'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const Key in robot) {
    const newValue = robot[Key];

    if (newRobot.hasOwnProperty(newValue)) {
      return null;
    }

    newRobot[newValue] = Key;
  }

  return newRobot;
}

module.exports = inverseRobot;
