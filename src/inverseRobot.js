'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (newRobot.hasOwnProperty(newKey)) {
      return null;
    }

    newRobot[newKey] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
