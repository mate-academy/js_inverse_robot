'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (!invertedRobot.hasOwnProperty(value)) {
      invertedRobot[value] = key;
    } else {
      return null;
    }
  }

  return invertedRobot;
}

module.exports = inverseRobot;
