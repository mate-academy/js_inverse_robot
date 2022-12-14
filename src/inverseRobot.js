'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    if (newRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    const value = robot[key];

    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
