'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normRobot = {};

  for (const key in robot) {
    if (normRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    normRobot[robot[key]] = key;
  }

  return normRobot;
}

module.exports = inverseRobot;
