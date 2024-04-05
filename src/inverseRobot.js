'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const finalValue in robot) {
    const finalKey = robot[finalValue];

    if (inversedRobot.hasOwnProperty(finalKey)) {
      return null;
    }

    inversedRobot[finalKey] = finalValue;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
