'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const corectRobot = {};

  for (const key in robot) {
    if (corectRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    corectRobot[robot[key]] = key;
  }

  return corectRobot;
}

module.exports = inverseRobot;
