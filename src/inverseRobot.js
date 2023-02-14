'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const robotKeyValue = robot[key];

    if (inversedRobot.hasOwnProperty(robotKeyValue)) {
      return null;
    }

    inversedRobot[robotKeyValue] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
