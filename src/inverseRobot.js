'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const property = robot[key];

    if (newRobot.hasOwnProperty(property)) {
      return null;
    }

    newRobot[property] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
