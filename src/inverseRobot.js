'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const oppositeRobot = {};

  for (const key in robot) {
    if (oppositeRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    oppositeRobot[robot[key]] = key;
  }

  return oppositeRobot;
}

module.exports = inverseRobot;
