'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const val = robot[key];

    if (inversedRobot.hasOwnProperty(val)) {
      return null;
    }
    inversedRobot[val] = key;
  }

  return inversedRobot;
}
module.exports = inverseRobot;
