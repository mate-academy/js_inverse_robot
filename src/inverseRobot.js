'use strict';

/*
 * @param {object} robot
 * @param {object} invertedRobot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (invertedRobot.hasOwnProperty(value)) {
      return null;
    }

    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
