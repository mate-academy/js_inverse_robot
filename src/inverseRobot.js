'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const k in robot) {
    if (newRobot.hasOwnProperty(robot[k])) {
      return null;
    }

    newRobot[robot[k]] = k;
  }

  return newRobot;
}

module.exports = inverseRobot;
