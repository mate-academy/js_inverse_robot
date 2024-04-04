'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (inversedRobot.hasOwnProperty(value)) {
      return null;
    }
    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
