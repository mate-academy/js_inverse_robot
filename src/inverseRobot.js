'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const modifiedRobot = {};

  for (const value in robot) {
    if (modifiedRobot.hasOwnProperty(robot[value])) {
      return null;
    }

    modifiedRobot[robot[value]] = value;
  }

  return modifiedRobot;
}

module.exports = inverseRobot;
