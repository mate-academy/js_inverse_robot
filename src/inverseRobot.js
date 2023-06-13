'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;

    if (newRobot.hasOwnProperty(robot[key])) {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
