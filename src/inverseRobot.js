'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const newValue = robot[key];

    if (invertedRobot.hasOwnProperty(newValue)) {
      return null;
    }

    invertedRobot[newValue] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
