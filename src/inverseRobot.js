'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverserRobot = {};

  for (const key in robot) {
    if (inverserRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    inverserRobot[robot[key]] = key;
  }

  return inverserRobot;
}

module.exports = inverseRobot;
