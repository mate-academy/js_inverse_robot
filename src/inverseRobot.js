'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const correctKey = robot[key];

    if (inversedRobot.hasOwnProperty(correctKey)) {
      return null;
    }

    inversedRobot[correctKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
