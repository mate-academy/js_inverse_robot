'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const i in robot) {
    const value = i;
    const key = robot[i];

    if (newRobot.hasOwnProperty(key)) {
      return null;
    }

    newRobot[key] = value;
  }

  return newRobot;
}

module.exports = inverseRobot;
