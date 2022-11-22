'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const robotKeyValue = robot[key];

    if (newRobot.hasOwnProperty(robotKeyValue)) {
      return null;
    }

    newRobot[robotKeyValue] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
