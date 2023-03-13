'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const corectRobot = {};

  for (const key in robot) {
    if (corectRobot[robot[key]] !== undefined) {
      return null;
    } else {
      corectRobot[robot[key]] = key;
    }
  }

  return corectRobot;
}

module.exports = inverseRobot;
