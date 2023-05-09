'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirrorRobot = {};

  for (const key in robot) {
    if (mirrorRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    mirrorRobot[robot[key]] = key;
  }

  return mirrorRobot;
}

module.exports = inverseRobot;
