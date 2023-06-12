'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inversedRobot.hasOwnProperty(value)) {
      return null;
    }
    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
