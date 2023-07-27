'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const part = robot[key];

    if (newRobot.hasOwnProperty(part)) {
      return null;
    }

    newRobot[part] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
