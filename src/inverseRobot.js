'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const value in robot) {
    if (newRobot.hasOwnProperty(robot[value])) {
      return null;
    }
    newRobot[robot[value]] = value;
  }

  return newRobot;
}

module.exports = inverseRobot;
