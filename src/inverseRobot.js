'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const keyToInverse in robot) {
    if (inversedRobot.hasOwnProperty(robot[keyToInverse])) {
      return null;
    }

    inversedRobot[robot[keyToInverse]] = keyToInverse;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
