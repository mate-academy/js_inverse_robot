'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const value in robot) {
    const key = robot[value];

    if (newRobot.hasOwnProperty(key)) {
      return null;
    }

    newRobot[key] = value;
  }

  return newRobot;
}

module.exports = inverseRobot;
