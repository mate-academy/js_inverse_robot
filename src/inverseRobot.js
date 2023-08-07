'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (invertedRobot.hasOwnProperty(newKey)) {
      return null;
    }

    invertedRobot[newKey] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
