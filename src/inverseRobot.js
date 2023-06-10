'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let inversedRobot = {};

  for (const key in robot) {
    if (inversedRobot.hasOwnProperty(robot[key])) {
      inversedRobot = null;

      break;
    }

    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
