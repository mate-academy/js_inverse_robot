'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const keyValue = robot[key];

    if (invertedRobot.hasOwnProperty(keyValue)) {
      return null;
    }

    invertedRobot[keyValue] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
