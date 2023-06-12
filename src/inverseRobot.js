'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const keyToInverse in robot) {
    const key = robot[keyToInverse];

    if (inversedRobot.hasOwnProperty(key)) {
      return null;
    }
    inversedRobot[key] = keyToInverse;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
